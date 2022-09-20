import { Link } from "react-router-dom";
import classes from "./Navigation.module.css"

function Navigation(){
    return(
        <div className={classes.header}>
            <h1>Cubs</h1>
            <nav>
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