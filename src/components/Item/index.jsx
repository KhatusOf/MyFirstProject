import React from "react";
import styles from "./Item.module.scss"
import { useAppContext } from "../../useAppContext";

export default function Item({item}){
    const {onShowItem,addToOrder}=useAppContext();
    return(
        <div className="item">
            <img src={"./images/"+item.img} onClick={()=>onShowItem(item)} alt="Error" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}</b>
            <div className={styles.addToCart} onClick={()=>addToOrder(item)}>+</div>
        </div>
    );
}