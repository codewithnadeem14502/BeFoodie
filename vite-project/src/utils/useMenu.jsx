
import { useState ,useEffect} from 'react'
import {FETCH_MENU_URL} from "../components/constant"

const useMenu = (id) => {
    const [resMenu,setResMenu ] = useState(null);

    // get API data
    
   useEffect(()=>{
    getRestaurantInfo();
   },[]) 
  async function getRestaurantInfo()
  {
    const data = await fetch(FETCH_MENU_URL+id);
    const json = await data.json();
   
    // console.log(json.data.cards[0].card.card.info);
    // console.log("menu is heree ------------------------")
    const temp = json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR;
    const total=temp?.cards[1]?.card?.card?.itemCards ? temp?.cards[1]?.card?.card?.itemCards : temp?.cards[2]?.card?.card?.itemCards 
    // console.log(total[0].card.info);
    // console.log(total[1].card.info.name);
    // console.log(total[2].card.info.name);
    // console.log(total[3].card.info.name);
    // console.log(total[4].card.info.name);
    // console.log(total);
    // console.log(total[5].card.info.name);
    setResMenu(total);
    // setResMenu(total);

  
    
    
    // setResMenu(json.data.cards[0].card.card.info);
  }

  return resMenu;
}

export default useMenu
