import React from "react";
import styles from "./ShowFullItem.module.scss"
import  {useAppContext} from "../../useAppContext";

export default function showFullItem(){

    const {fullItem,onShowItem,addToOrder} = useAppContext();

    const handleClose=()=>{
        setShowFullItem(false);
    }
    if(!showFullItem) return null;

    return(
        <div className={styles.fullItem}>
            <div>
                <img src={"./images"+fullItem.img} onClick={showFullItem} alt="Error" />
                <h2>{fullItem.title}</h2>
                <p>{fullItem.desc}</p>
                <b>{fullItem.price}$</b>
                <div className={styles.addToCart} onClick={()=>addToOrder(fullItem)}>+</div>
            </div>

        </div>
    );
}