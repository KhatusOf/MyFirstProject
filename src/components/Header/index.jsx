import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import styles from "./Header.module.scss";

export default function Header(){
    let [cartOpen,setCartOpen]=useState[false];

    return(
        <header>
            <div>
                <span className={styles.logo}>Bakery </span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <PiBasketBold onclick={()=>setCartOpen(cartOpen=!cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? 'active' : ''}`}/>

                {cartOpen &&(
                    <div className={styles.ShopCart}>

                    </div>
                )}
                
            </div>
            <div className={styles.presentation}></div>
        </header>
        
    );
}