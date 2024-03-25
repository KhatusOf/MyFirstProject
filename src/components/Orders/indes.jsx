import React from "react";
import styles from "./Orders.module.scss";
import { GrTrash } from "react-icons/gr";
import { useAppContext } from "../../useAppContext";

export default function Orders({item}){

    const {deleteOrder}= useAppContext();

    return(
        <div className={styles.item}>
            <img src="./images/" alt="Error" />
            <h2>{item.title}</h2>
            <b>{item.price}$</b>
            <GrTrash onClick={()=>deleteOrder(item.id)} className={styles.deleteIcon}/>
        </div>

    );
    
}