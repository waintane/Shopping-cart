import classes from "./CartPage.module.css";
import React, {useState} from "react";

let listePanier = [];
let totalPrice = 0;
let numberObjet = -1;

function CartPage(props){

    const [display, displayRefresh] = useState();

    function retrait(value,price){
        let target = listePanier.findIndex(object => {return object.key === value});
        totalPrice = totalPrice - price;
        listePanier.splice(target, 1);
        displayRefresh(prev => value);
    }

    return(
        <div className={classes.shopping_cart}>
            {listePanier.map( value =>
            <div key={value.key} className={classes.content_panier}> 
                <p> {value.name} </p>
                <p> {value.price} </p>
                <button onClick={() => retrait(value.key , value.price)}>x</button>
            </div>)}
            <p> ${Math.round(totalPrice * 100) / 100} </p>
        </div>
    )
}

function ajoutePanier(price, name){
    numberObjet += 1;
    const objet = {
        key: numberObjet,
        price: price,
        name: name
    }
    totalPrice += price;
    listePanier.push(objet);
    CartPage();
}


export default CartPage;
export {ajoutePanier};