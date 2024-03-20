import React from "react";
import styles from"./Categories.module.scss";

export default function Categories(props){

    const categories=[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"pie",
            name:"Пироги"
        },
        {
            key:"confectionery products",
            name:"Кондитерские изделия"
        }
    ];

    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}