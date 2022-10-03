import classes from "./ShoppingCard.module.css";
import {ajoutePanier} from "../UI/CartPage"

function ShoppingCard(props){
    return(
        <div className={classes.card_container}>
            <img src={props.img} alt="vetement"></img>
            <p className={classes.item_name}>{props.name}</p>
            <div>
                <p className={classes.item_price}>${props.price}</p>
                <div className={classes.add_to_cart} onClick={() => ajoutePanier(props.price, props.name)}>Ajouter</div>
            </div>
        </div>
    );
}
export default ShoppingCard;