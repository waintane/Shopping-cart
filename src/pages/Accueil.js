import CardList from "../components/CardList";
import ShoppingCard from "../components/ShoppingCard";
import classes from "./Accueil.module.css";
import data from "../DataBase/Data.json";

function Accueil(){
    let dataHommeVendeur = data.filter(data => data.genre === "homme" && data.vente === "high");
    let move = 0;
    function slideGauche(){
        let containerOffre = document.querySelector(".affichage_offre");
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        move -= dimension + 20;
        containerOffre.style.transform = `translateX(${move}px`
    }
    function slideDroite(){
        let containerOffre = document.querySelector(".affichage_offre");
        let card = document.querySelector(".ShoppingCard_card_container__Qch04");
        let dimension = card.clientWidth;
        move += dimension +20;
        containerOffre.style.transform = `translateX(${move}px`
    }

    return(
        <div className={classes.main_accueil}>
            <h2>Meilleur vendeur pour homme</h2>

            <div className={classes.men_best_seller_container}>
                <div className={classes.container_carousel}>
                    <button onClick={slideGauche}>g</button>
                    <button onClick={slideDroite}>d</button>
                    <div className="affichage_offre">
                    <CardList dataFiltre={dataHommeVendeur}></CardList>
                    </div>
                </div>
            </div>

            <h2>Meilleur vendeur pour femme</h2>
        </div>
    )
}
export default Accueil;