import { Link } from "react-router-dom";
import classes from "./Navigation.module.css"
import imgHeader from "../img/img-header.jpg";
import React, {useState} from "react";
import CartPage from "../UI/CartPage";

/* use state sur le bouton burger */



function Navigation(){

    const [page, refreshPage] = useState();
    const [cart, displayCart] = useState(false);
    
    const dontShow = {
        display: "none",
    }
    

    let menuState = false;
    function deployMenu(){ 
        const burger = document.querySelector("div div div div svg"); 
        const menu = document.querySelector("div nav");
        if (menuState === false){   
            console.log(burger);   
            burger.style.transform = "rotate(90deg)";
            menu.style.transform = "translateX(0%)";
            menuState = true;
        }else{
            console.log(burger);
            burger.style.transform = "rotate(0deg)";
            menu.style.transform = "translateX(-100%)";
            menuState = false;
        }
    }
    window.addEventListener("resize", ()=>{
        if(window.innerWidth > 799){
            menuState = false;
            deployMenu();
        }
    })
    function showCart(){
        const svgShop = document.querySelector(".panier");
        const svgFerme = document.querySelector(".fermeture");
        if(cart === false){
            svgShop.style.display = "none";
            svgFerme.style.display = "flex";
            displayCart(prev => true);
        }else{
            svgShop.style.display = "flex";
            svgFerme.style.display = "none";
            displayCart(prev => false)
        }
    }

    return(
        <div className={classes.header}>
            <div className={classes.header_fixed}>
                <div className={classes.head_mobile}>
                    <div onClick={deployMenu} className={classes.burger}>
                        <svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000000"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                    </div>
                    <Link to="/Shopping-cart" onClick={() => refreshPage(prev => "Accueil")}><h1>Cubs</h1></Link>

                    <div className={classes.shopping_cart} onClick={showCart}>
                        <svg className="panier" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                        <svg style={dontShow} className="fermeture" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    
                </div>
                <nav className={classes.menu}>
                    <ul>
                        <li>
                            <Link to="/Shopping-cart" onClick={() => {refreshPage(prev => "Accueil"); deployMenu()}}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/Men-page" onClick={() => {refreshPage(prev => "Homme"); deployMenu()}}>Homme</Link>
                        </li>
                        <li>
                            <Link to="/Women-page" onClick={() => {refreshPage(prev => "Femme"); deployMenu()}}>Femme</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.img_header}>
                <img className={classes.imgHeader} src={imgHeader} alt="jeune femme"></img>
                <h3> {page} </h3>
                <h2>l'apparence du professionnel moderne</h2>
            </div>

            {cart === true ? <CartPage/> : null}
        </div>
        
    )
}



export default Navigation;