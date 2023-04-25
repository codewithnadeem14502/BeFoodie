import { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {RestaurantList} from './constant'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import useOnline from '../utils/useOnline'
import UserContext from '../utils/UserContext';
import Offlinepage from './Offlinepage';

function filterData(SearchIp,restaurants){
  const filterData = restaurants.filter((restaurant) =>restaurant?.data?.name?.toLowerCase().includes(SearchIp.toLowerCase()));
  return filterData;
}


const Body = () =>{
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filledRestaurants,setFilledRestaurants] = useState([]);
  const [SearchIp,setSearchIp] = useState("");
  const {user,setUser} = useContext(UserContext)
  // const [searchClicked,setsearchClicked] = useState("false" );
  useEffect(() =>{
   getRestaurants();
  },[]);

  async function getRestaurants()
  {
     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING");
     const json = await data.json();
    //  console.log(json)
     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
     setFilledRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if(!isOnline)
  {
    // return <h1> 🔴Offline 🚩. check your connection </h1>
    return (
      <Offlinepage/>
    )
  }
// conditional rendering
// if restraunt is empty then shimmer ui 
// if restrant has data then acutal ui

  if(!allRestaurants) return null; 

  // if(filledRestaurants?.length === 0) return <h1> NO Restruant match </h1> 
    return allRestaurants.length === 0 ? ( <Shimmer/> ) : (

<>
<div className=" font-bold pl-[350px]  my-28 flex justify-center items-center fixed"> 
  <input 
  type = "text" 
   className=' rounded-sm text-black border to-black focus:bg-green-100  p-2 m-2 w-[75vh]'
   placeholder='Get your favourite Indian Food in just one click....'
   value = {SearchIp}
   onChange={(e) =>{
    setSearchIp(e.target.value);
   }}
   />
{/* <h1>{searchClicked}</h1> */}
   <button className='p-2 m-2 bg-green-400  text-white rounded-md hover:bg-red-600'onClick={() =>{

  const data = filterData(SearchIp,allRestaurants);
  // console.log("search ->"+SearchIp);
  setFilledRestaurants(data);
  // update
   }}>Search</button>
   {/* <input value={user.name} onChange={e =>setUser({
    name:e.target.value,
    email: "codewithnadeem@gmail.com",
   }) }></input>
    */}
</div>
 <input></input>
  <div className='flex flex-wrap mt-40 px-14 '>
    
  {filledRestaurants.map(restaurant =>{
      return(
      <Link to={"/restaurant/"+restaurant.data.id} >  <RestaurantCard{...restaurant.data}/></Link>
        ) 
        
    })}
  
  </div>
  </>
    );
  };

  export default Body;