import { Link } from "react-router-dom";
import classes from "./Navigation.module.css"

function Navigation(){
   
    let menuState = false;

    function deployMenu(){
        const menu = document.querySelector("div nav");  
        if (menuState === false){      
            menu.style.transform = "translateX(0%)"
            menuState = true;
        }else{
            menu.style.transform = "translateX(-100%)"
            menuState = false;
        }
    }

    return(
        <div className={classes.header}>
            <div className={classes.head_mobile}>
                <div onClick={deployMenu}><svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000000"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg></div>
                <h1>Cubs</h1>
            </div>
            <nav className={classes.menu}>
                <ul>
                    <li>
                        <Link to="/">Acceuil</Link>
                    </li>
                    <li>
                        <Link to="/Men-page">Men</Link>
                    </li>
                    <li>
                        <Link to="/Women-page">Women</Link>
                    </li>
                </ul>
            </nav>
            x
        </div>
    )
}
export default Navigation;