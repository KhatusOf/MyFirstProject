import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import styles from "./Header.module.scss"
import Orders from "../Orders";
import {useAppContext} from "./../../useAppContext";

export default function Header(){
    const {orders, deleteOrder}= useAppContext();

    let [cartOpen,setCartOpen]=useState(false);

    const showOrders=()=>{
        let summa=0;
        orders.array.forEach(el=>summa+=Number.parseFloat(el.price));
        return(
            <div>
                {props.orders.map(el=>(
                    <Orders onDelete={deleteOrder} key={el.id} item={el}/>
                ))}
                <p className={styles.summa}>Итого:{new Intl.NumberFormat().format(summa)} $</p>
            </div>
        );
    }

    const showNothing=()=>{
        return(
            <div className={styles.empty}>

            </div>
        )
    }
}//тут ли оно должно быть?

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
                        {orders.length>0?
                            showOrders():showNothing()
                        }
                    </div>
                )}
            </div>
            <div className={styles.presentation}></div>
        </header>
        
    );