import ShoppingCard from "./ShoppingCard";
import data from "../DataBase/Data.json";
import classes from "./CardList.module.css";

function CardList(props){
    return(
        <div className={classes.card_list_container}>
            {props.dataFiltre.map(data => <ShoppingCard
            id={data.id}
            key={data.id}
            img={data.img}
            name={data.name}
            price={data.price} ></ShoppingCard>)}
        </div>
    );
}
export default CardList;