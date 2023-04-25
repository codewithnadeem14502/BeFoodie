import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer2 from './Shimmer2';
import useMenu from '../utils/useMenu';
import Shimmer from './Shimmer';
import { FOOD_ITEM_IMAGE, IMG_URL } from './constant';
import {addItems} from '../utils/cartSlice';
import {removeItems} from '../utils/cartSlice';
import {useDispatch, useSelector} from 'react-redux'
import {AiFillStar} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {GrFormSubtract} from 'react-icons/gr'

const RestrauntList = () => {
  const {id} = useParams();
  // console.log(id)


  const cartItems = useSelector((store) => store.cart.items);
  const resturantMenu = useMenu(id);
  //  const [res,setRes ] = useState(null);
   const dispatch = useDispatch();
   const addFoodItem = (item) =>{
    // dipatch an action
    dispatch(addItems(item));
    // console.log("dispatch is called ")
  }
  
  function cartAddHandler(id)
  {
      console.log("Now adding id is",id)
       dispatch(addItems(menu.card.info))

  }

  function cartRemoveHandler(id)
  {
      console.log("Now removing id is",id)
      dispatch(removeItems(id))
  }
  
// export default RestrauntMeun;
return (!resturantMenu) ?  <Shimmer2/> : (


    
    <div>
      
      {/* <h1>Menu</h1> */}
<h1 className="font-bold mt-5 text-lg">Recommended ({resturantMenu.length})</h1> 
 <div className='menu   pl-60'>
     
     {resturantMenu && resturantMenu.map((menu, index) => (
  <div key={index} className='flex bg-slate-300 rounded-md m-5 p-3    shadow-lg  w-[500px] h-[150px]   '>
    
             <div className='mx-5 mt-3  pr-40'>
             <ul >
      <li> {menu.card.info.name}</li>
      <li>  {(menu.card.info.price)/100} Rs</li>
      <div className='flex'>

      <h3> { Number(menu.card.info.ratings.aggregatedRating.rating) } </h3>
      
      <h3 className='ml-2 mt-1 text-yellow-300'>< AiFillStar/></h3>
      </div>
          
    </ul>
              </div>
              <div  className="  ">
      <img 
            src={
              FOOD_ITEM_IMAGE +
              menu?.card?.info?.imageId
            }
            alt="loading image"
            className="rounded-full border-2 border-solid border-black ml-3 w-[74px] h-[80px]"
             />
           
            <div className="flex justify-between">
      
        <button
            className="text-green-400 m-2 p-2 float-left border border-solid border-black hover:bg-red-500"
            onClick={()=>cartRemoveHandler(menu.card.info.id)}
          >
            <GrFormSubtract/>
          </button>
          
          <h1 className="text-black font-semibold mt-3">{cartItems.filter((item)=>item.id===menu?.card?.info?.id).length}</h1>
          
          <button className='    m-2 p-2 float-left  border border-solid border-black hover:bg-green-500'onClick={() =>addFoodItem(menu?.card?.info )}>   <GrAdd/></button>
      </div>
      </div>
  </div>
))}




    </div>
  </div>
);
};

export default RestrauntList;


{/* <img
src={
  IMG_URL +
  menu?.card?.info?.imageId
}
alt={menu?.card?.info?.name}
className="h-[100%] w-[100%] rounded-lg object-cover "
 /> */}