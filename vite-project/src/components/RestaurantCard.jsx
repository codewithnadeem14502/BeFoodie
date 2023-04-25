import { IMG_URL } from "./constant"

const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) =>{
    return(
      <div className=' w-[350px]  text-black p-2 ml-5 mb-5  rounded-xl hover:bg-yellow-400 cursor-pointer hover:shadow-xl' >
       <img src={IMG_URL+cloudinaryImageId} />
      
       <h2 className="font-bold text-xl">{name}</h2>
       <h3>{cuisines.join(", ")}</h3>
       <h4>{lastMileTravelString} Mins</h4>
      </div>
    )
  }
  export default RestaurantCard;