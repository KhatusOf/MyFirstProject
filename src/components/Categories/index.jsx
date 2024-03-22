import React, {useContext} from "react";
import styles from"./Categories.module.scss";
import { useAppContext } from "../../useAppContext";

export default function Categories(props){

    const {chooseCategory}=useAppContext();

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
                <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}