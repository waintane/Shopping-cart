import classes from "./ShoppingCard.module.css";

function ShoppingCard(props){
    return(
        <div className={classes.card_container}>
            <img src="https://cdn.shopify.com/s/files/1/1368/3463/products/WHITE-CREW-CURVE-HEM4825_350x_crop_center@2x.progressive.jpg?v=1603323882"></img>
            <p className={classes.item_name}>White t-shirt</p>
            <div>
                <p className={classes.item_price}>50.99$</p>
                <div className={classes.add_to_cart}>Ajouter</div>
            </div>
        </div>
    );
}
export default ShoppingCard;