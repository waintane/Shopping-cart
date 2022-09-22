import CardList from "../components/CardList";
import ShoppingCard from "../components/ShoppingCard";
import classes from "./Accueil.module.css";
import data from "../DataBase/Data.json";

function Accueil(){
    let dataHommeVendeur = data.filter(data => data.genre === "homme" && data.vente === "high");
    return(
        <div className={classes.main_accueil}>
            <h2>Meilleur vendeur pour homme</h2>
            <div className={classes.men_best_seller_container}>
                <CardList dataFiltre={dataHommeVendeur}></CardList>
            </div>
            <h2>Meilleur vendeur pour femme</h2>
        </div>
    )
}
export default Accueil;