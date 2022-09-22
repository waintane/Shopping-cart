import CardList from "../components/CardList";
import ShoppingCard from "../components/ShoppingCard";
import classes from "./Accueil.module.css"

function Accueil(){
    return(
        <div className={classes.main_accueil}>
            <h2>Mens best seller</h2>
            <div className={classes.men_best_seller_container}>
                <CardList></CardList>
            </div>
        </div>
    )
}
export default Accueil;