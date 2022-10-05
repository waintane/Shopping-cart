import classes from "./CartPage.module.css";
import React, {useState} from "react";
import react from "react";

let listePanier = [];
let totalPrice = 0;
let numberObjet = -1;

function CartPage(props){

    let nombreItem = 0;
    const [display, displayRefresh] = useState();

    function retrait(value,price){
        let target = listePanier.findIndex(object => {return object.key === value});
        totalPrice = totalPrice - price;
        listePanier.splice(target, 1);
        displayRefresh(prev => value);
    }

    return(
        <div className={classes.shopping_cart}>
            <div className={classes.overall_panier}>
            <h3>Vous avez {listePanier.length} item{listePanier.length > 1 ? "s" : ""} dans le panier</h3>
            {listePanier.map( value =>
            <div key={value.key} className={classes.content_panier}> 
                <p> {value.name} </p>
                <p> ${value.price} </p>
                <div className={classes.button_panier} onClick={() => retrait(value.key , value.price)}>x</div>
            </div>)}
            <p className={classes.prix_total}>Prix total : ${Math.round(totalPrice * 100) / 100} </p>
            </div>
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
}


export default CartPage;
export {ajoutePanier};