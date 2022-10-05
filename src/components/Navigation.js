import { Link } from "react-router-dom";
import classes from "./Navigation.module.css"
import imgHeader from "../img/img-header.jpg";
import React, {useState} from "react";
import CartPage from "../UI/CartPage";

/* use state sur le bouton burger */



function Navigation(){

    const [page, refreshPage] = useState();
    const [cart, displayCart] = useState(false);
    

    let menuState = false;
    function deployMenu(){  
        const menu = document.querySelector("div nav");
        if (menuState === false){      
            menu.style.transform = "translateX(0%)";
            menuState = true;
        }else{
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
        if(cart === false){
            displayCart(prev => true);
        }else{
            displayCart(prev => false)
        }
    }

    return(
        <div className={classes.header}>
            <div className={classes.header_fixed}>
                <div className={classes.head_mobile}>
                    <div onClick={deployMenu} className={classes.burger}><svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000000"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg></div>
                    <Link to="/" onClick={() => refreshPage(prev => "Accueil")}><h1>Cubs</h1></Link>

                    <div className={classes.shopping_cart} onClick={showCart}>
                        <svg width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                    </div>
                    
                </div>
                <nav className={classes.menu}>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => refreshPage(prev => "Accueil")}>Accueil</Link>
                        </li>
                        <li>
                            <Link to="/Men-page" onClick={() => refreshPage(prev => "Homme")}>Homme</Link>
                        </li>
                        <li>
                            <Link to="/Women-page" onClick={() => refreshPage(prev => "Femme")}>Femme</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classes.img_header}>
                <img className={classes.imgHeader} src={imgHeader} alt="jeune femme"></img>
                <h3> {page} </h3>
                <h2>Workleisure Apparel for the Modern Professional</h2>
            </div>

            {cart === true ? <CartPage/> : null}
        </div>
        
    )
}



export default Navigation;