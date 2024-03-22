import React,{useContext} from "react";

const AppContext = React.createContext();

export const useAppContext = () =>{
    const context = useContext(AppContext);
    
    if(!context){
        throw new Error("Ошибка при получении в useAppContext");
    }
    return context;
}

export const AppProvider = ({children}) =>{
    const [items,setItems]=useState([
        {
          id:1,
          title:'croissant',
          img:'crossaunt.jpg',
          desc:'Cwasou',
          category:'confectionery products',
          price:'300'
        },
        {
          id:2,
          title:'Donut',
          img:'donut.jpg',
          desc:'Donut with hole',
          category:'confectionery products',
          price:'200'
        },
        {
          id:3,
          title:'Donut with no hole',
          img:'donutWithNoO.jpg',
          desc:'Just a donut with no hole',
          category:'confectionery products',
          price:'300'
        },
        {
          id:4,
          title:'Coockie',
          img:'coockie.jpg',
          desc:'Coockie',
          category:'confectionery products',
          price:'300'
        },
        {
          id:5,
          title:'Pumpkin Pie',
          img:'pumpkinpie.jpg',
          desc:'A pie with a pumpkin on its head',
          category:'Pie',
          price:'2000'
        },
        {
          id:6,
          title:'A Bun with some cinnamon',
          img:'thumb400.jfif',
          desc:'Cinnamon bun',
          category:'confectionery products',
          price:'500'
        },
        {
          id:7,
          title:'A snail bun',
          img:'ulitka.jpg',
          desc:'snail was too slow so now its a bun',
          category:'confectionery products',
          price:'500'
        },
        {
          id:8,
          title:'Starwberry Pie',
          img:'strawberrypie.jpg',
          desc:'this was the last straw :D',
          category:'Pie',
          price:'2000'
        },
        {
          id:9,
          title:'Raspberry Pie',
          img:'raspberrypie.jpg',
          desc:'was rasping to much :D',
          category:'Pie',
          price:'2000'
        },
        {
          id:10,
          title:'Muffin',
          img:'muffin.jpg',
          desc:'we ran out of ideas',
          category:'confectionery products',
          price:'500'
        }
      ]);
      
      const [orders,setOrders]=useState([]);
      const [currentItems,setCurrentItems]=useState([]);
      const [showFullItem,setShowFullItem]=useState(false);
      const [fullItem,setFullItem]=useState({});
      
      useEffect(()=>{
        setCurrentItems(items);
      },[items]);
      
      const deleteOrder = (id) =>{
        setOrders(orders.filter((el)=>el.id!==id));
      }
      
      const addToOrder=(item)=>{
        if(!orders.some((el)=>el.id===item.id)){
          setOrders([...orders,item]);
        }//добавление товараБ но одного типа
      
        //setOrders([...orders,item]); неогран количесвто товаров одного типа
      }
      
      const chooseCategory = (category)=>{
        if(category==="all"){
          setCurrentItems(items);
        }
        else{
          setCurrentItems(items.filter((el)=>el.category===category));
        }
      }
      
        const onShowItem = (item)=>{
          setFullItem(item);
          setShowFullItem(!showFullItem);
        }

        const contextValue={
            items,
            setItems,
            orders,
            setOrders,
            currentItems,
            setCurrentItems,
            showFullItem,
            setShowFullItem,
            fullItem,
            setFullItem,
            deleteOrder,
            addToOrder,
            chooseCategory,
            onShowItem,
        };
    
        return<AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}