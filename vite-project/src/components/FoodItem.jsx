import { IMG_URL } from "./constant"


const FoodItem = ({
    //  ratings = ratings.aggregatedRating.rating,
    name,
    imageId,
     description,
     price,
     ratings,
  }) =>{
    return(
      // <div className='   mt-16 bg-white p-2 m-2 shadow-xl rounded-sm' >
      // <div className="">
        
      //    <img className="  w-10 h-10 rounded-2xl mr-2 mt-3"  src={IMG_URL+imageId}/>
      //   </div>
      //   <div className=" ">
      //  <h2 className="">Name :{name}</h2>
      //  <h3 className="">Prices:{price/100} RS</h3>
      //  <h3 className="">Rate : {ratings.aggregatedRating.rating} stars</h3>

      //   </div>
       
      // </div>
      <div className=' w-[450px]  text-black p-2 ml-5 mb-5 shadow-2xl rounded-xl hover:bg-yellow-400 cursor-pointer ' >


        <img className="  w-10 h-10 rounded-2xl mr-2 mt-3"  src={IMG_URL+imageId}/>
        <h2 className="">Name :{name}</h2>
       <h3 className="">Prices:{price/100} RS</h3>
        <h3 className="">Rate : {ratings.aggregatedRating.rating} stars</h3>
    
       
      </div>
    )
  }
  export default FoodItem;