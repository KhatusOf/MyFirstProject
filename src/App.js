import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import "./index.scss";


export default function App() {
const [items,setItems]=useState([
{
  id:1,
  title:'croissant',
  img:'crossaunt.jpg',
  desc:'Cwasou',
  category:'',
  price:'300'
},
{
  id:2,
  title:'Donut',
  img:'donut.jpg',
  desc:'Donut with hole',
  category:'',
  price:'200'
},
{
  id:3,
  title:'Donut with no hole',
  img:'donutWithNoO.jpg',
  desc:'Just a donut with no hole',
  category:'',
  price:'300'
},
{
  id:4,
  title:'Coockie',
  img:'coockie.jpg',
  desc:'Coockie',
  category:'',
  price:'300'
},
{
  id:5,
  title:'Pumpkin Pie',
  img:'pumpkinpie.jpg',
  desc:'A pie with a pumpkin on its head',
  category:'',
  price:'2000'
},
{
  id:6,
  title:'A Bun with some cinnamon',
  img:'',
  desc:'Cinnamon bun',
  category:'',
  price:'500'
},
{
  id:7,
  title:'A snail bun',
  img:'',
  desc:'snail was too slow so now its a bun',
  category:'',
  price:'500'
},
{
  id:8,
  title:'Starwberry Pie',
  img:'',
  desc:'this was the last straw :D',
  category:'',
  price:'2000'
},
{
  id:9,
  title:'Raspberry Pie',
  img:'',
  desc:'was rasping to much :D',
  category:'',
  price:'2000'
},
{
  id:10,
  title:'Muffin',
  img:'',
  desc:'we ran out of ideas',
  category:'',
  price:'500'
}
]);

const[orders,setOrders]=useState([]);

const deleteOrder = (id) =>{
  setOrders(orders.filter((el)=>el.id!==id));
}

const addToOrder=(item)=>{
  if(!orders.some((el)=>el.id===item.id)){
    setOrders([...orders,item]);
  }//добавление товараБ но одного типа

  //setOrders([...orders,item]); неогран количесвто товаров одного типа
}

  return(
    <div className="wrapper">
      <Header/>
      <Footer/>
    </div>
  );
}