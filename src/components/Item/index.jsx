import React from "react";
import styles from "./Item.module.scss"

export default function Item(props){
    return(
        <div className="item">
            <img src={"./images/"+props.item.img} onClick={()=>props.onShowItem(props.item)} alt="Error" />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}</b>
            <div className={styles.addToCart} onClick={()=>props.onAdd(props.item)}>+</div>
        </div>
    )
}