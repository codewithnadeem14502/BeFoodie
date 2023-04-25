
import { useState ,useEffect} from 'react'
import {FETCH_MENU_URL} from "../components/constant"

const useRestaurant = (id) => {
    const [res,setRes ] = useState(null);

    // get API data
    
   useEffect(()=>{
    getRestaurantInfo();
   },[]) 
  async function getRestaurantInfo()
  {
    const data = await fetch(FETCH_MENU_URL+id);
    const json = await data.json();
   
    // console.log(json.data.cards[0].card.card.info);
  
    // const temp = json.data.cards[3].groupedCard?.cardGroupMap?.REGULAR;
    // const total=temp.cards[1].card.card.itemCards ? temp.cards[1].card.card.itemCards : temp.cards[2].card.card.itemCards 
    // console.log(total);
    
    
    setRes(json.data.cards[0].card.card.info);
  }

  return res;
}

export default useRestaurant
