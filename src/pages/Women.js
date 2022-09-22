import classes from "./Women.module.css";
import data from "../DataBase/Data.json";
import CardList from "../components/CardList";

function Women(){
    let dataFemme = data.filter(data => data.genre === "femme");
    return(
        <div className={classes.main_femme}>
            <h2>Femme</h2>
            <div className={classes.produits_femme}>
                <CardList dataFiltre={dataFemme}></CardList>
            </div>
        </div>
    )
}
export default Women;