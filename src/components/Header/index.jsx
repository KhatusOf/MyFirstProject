import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import styles from "./Header.module.scss"
import Orders from "../Orders/indes";

const showOrders=(props)=>{
    let summa=0;

    props.orders.array.forEach(el=>summa+=Number.parseFloat(el.price));

    return(
        <div>
            {props.orders.map(el=>(
                <Orders onDelete={props.onDelete} key={el.id} item={el}/>
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

export default function Header(){
    let [cartOpen,setCartOpen]=useState(false);

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

                 {/* {cartOpen &&(
                    <div className={styles.ShopCart}>
                        {props.orders.length>0?
                            showOrders(props):showNothing()
                        }

                        { {props.orders.map(el=>{
                        
                        })} }

                    </div>
                )}  */}
                
            </div>
            <div className={styles.presentation}></div>
        </header>
        
    );
}