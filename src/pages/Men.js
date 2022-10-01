import classes from "./Men.module.css";
import CardList from "../components/CardList";
import data from "../DataBase/Data.json";


function Men(){
    let dataHomme = data.filter(data => data.genre === "homme");
    return(
        <div className={classes.main_men}>
            <h2>Homme</h2>
            <div className={classes.produits_homme}>
                <CardList dataFiltre={dataHomme}></CardList>
            </div>
        </div>
    )
}
export default Men;