import React from "react";

export default function Item(props){
    return(
        <div className="item">
            <img src={"./images/"+props.item.img} alt="Error" />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}</b>
            <div className={styles.addToCart}>+</div>

        </div>
    )
}