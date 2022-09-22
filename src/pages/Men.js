import classes from "./Men.module.css";
import ShoppingCard from "../components/ShoppingCard";
import CardList from "../components/CardList";

function Men(){
    return(
        <div className={classes.main_men}>
            <h2>Homme</h2>
            <div className={classes.produits_homme}>
                <CardList></CardList>
            </div>
        </div>
    )
}
export default Men;