import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IMG_URL } from './constant';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import useMenu from '../utils/useMenu';
import RestrauntList from './RestaurantList'
import Shimmer2 from './Shimmer2';
import {BsFillExclamationOctagonFill} from 'react-icons/bs' 
import {AiFillStar} from 'react-icons/ai' 
const RestrauntMeun = () => {
  const {id} = useParams();
  // console.log(id)
  const resturant = useRestaurant(id);
  // const resturantMenu = useMenu(id);
  //  const [res,setRes ] = useState(null);


// export default RestrauntMeun;
return (
  <div className="  ">
<div className='flex justify-center border-2 border-soild mt-28  border-black p-5  m-1 h-48'>

<div class=" ml-5 absolute left-0">
      <h2 className='font-semibold text-2xl'> {resturant?.name}</h2>
      <h3 className=''> {resturant?.city}</h3>
      <h3 >{resturant?.sla.lastMileTravelString}</h3>
      <h3 > {resturant?.sla.slaString}</h3>
      
      <div className='flex  '>
      <h1 className='mt-1 text-red-500'> < BsFillExclamationOctagonFill/></h1> 
      <h3 className='ml-2'> {resturant?.feeDetails.message}</h3>
      </div>
   
  </div>

    <div className=' absolute right-0 mt-5 pr-9'  >
      <div className="  m-5 p-5 text-sm border rounded-md bg-slate-50  border-soild border-black border-2 ">
     <div className='flex'>
      <h3 className='font-bold text-green-400 text-lg'> {resturant?.avgRating} </h3>
      <h3 className=' mt-1  ml-2 text-green-400  text-lg'>   <AiFillStar/>  </h3>
   
      </div>
       <div className='border-2 border-solid border-black'></div>
      <h3 className='font-semibold '> {resturant?.totalRatings} + ratings</h3>
      </div>
      </div>
      
  </div>
   
      <div className=' m-10' >
      <RestrauntList/>
      </div>
  </div>
);
};

export default RestrauntMeun;