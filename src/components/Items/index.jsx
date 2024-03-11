import React from "react";
import Item from "./../Items";

export default function Items(props){
    return(
        <main>
            {props.allItems.map(el=>{
                <Item key={el.id} item={el}/>
            })}
        </main>
    );
}