import CardList from "../components/CardList";
import classes from "./Accueil.module.css";
import data from "../DataBase/Data.json";
import {slideGauche, slideDroite} from "../UI/Carousel"

function Accueil(){
    let dataHommeVendeur = data.filter(data => data.genre === "homme" && data.vente === "high");
    let dataFemmeVendeur = data.filter(data => data.genre === "femme" && data.vente === "high")

    let moveCarouselHomme = 0;
    let moveCarouselFemme = 0;

    return(
        <div className={classes.main_accueil}>
            <h2>Meilleur vendeur pour homme</h2>

            <div className={classes.men_best_seller_container}>
                <div className={classes.container_carousel}>
                    <button data-mssg={moveCarouselHomme} onClick={slideGauche}>g</button>
                    <button data-mssg={moveCarouselHomme} onClick={slideDroite}>d</button>
                    <div className="affichage_offre">
                    <CardList dataFiltre={dataHommeVendeur}></CardList>
                    </div>
                </div>
            </div>

            <h2>Meilleur vendeur pour femme</h2>

            <div className={classes.men_best_seller_container}>
                <div className={classes.container_carousel}>
                    <button data-mssg={moveCarouselFemme} onClick={slideGauche}>g</button>
                    <button data-mssg={moveCarouselFemme} onClick={slideDroite}>d</button>
                    <div className="affichage_offre">
                    <CardList dataFiltre={dataFemmeVendeur}></CardList>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accueil;