import CardList from "../components/CardList";
import classes from "./Accueil.module.css";
import data from "../DataBase/Data.json";
import {slideGauche, slideDroite} from "../UI/Carousel"
import { Link } from "react-router-dom";

function Accueil(){
    let dataHommeVendeur = data.filter(data => data.genre === "homme" && data.vente === "high");
    let dataFemmeVendeur = data.filter(data => data.genre === "femme" && data.vente === "high");

    let moveCarouselHomme = 0;
    let moveCarouselFemme = 0;

    return(
        <div className={classes.main_accueil}>
            <div>
            <h2>Meilleur vendeur pour homme</h2>
            <Link to="/men-page"><button>Voir plus</button></Link>
            </div>
            <div className={classes.men_best_seller_container}>
                <div className={classes.container_carousel}>

                    <button 
                    data-value={moveCarouselHomme}
                    data-container={".affichage_offre_homme"}
                    onClick={slideGauche}>
                    {"<"} 
                    </button>

                    <button 
                    data-value={moveCarouselHomme}
                    data-container={".affichage_offre_homme"}
                    data-length={dataHommeVendeur.length} 
                    onClick={slideDroite}>
                    {">"} 
                    </button>

                    <div className="affichage_offre_homme">
                    <CardList dataFiltre={dataHommeVendeur}></CardList>
                    </div>
                </div>
            </div>

            <div>
            <h2>Meilleur vendeur pour femme</h2>
            <Link to="/women-page"><button>Voir plus</button></Link>
            </div>
            <div className={classes.men_best_seller_container}>
                <div className={classes.container_carousel}>

                    <button
                    data-value={moveCarouselFemme} 
                    data-container={".affichage_offre_femme"} 
                    onClick={slideGauche}> 
                    {"<"} 
                    </button>

                    <button 
                    data-value={moveCarouselFemme} 
                    data-container={".affichage_offre_femme"} 
                    data-length={dataFemmeVendeur.length} 
                    onClick={slideDroite}> 
                    {">"} 
                    </button>
                    
                    <div className="affichage_offre_femme">
                    <CardList dataFiltre={dataFemmeVendeur}></CardList>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accueil;