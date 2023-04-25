import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import FoodItem from './FoodItem'
 import { removeDuplicates } from "../utils/funciton";
 import {addItems} from '../utils/cartSlice';
import {removeItems} from '../utils/cartSlice';
import { calculatePrice } from "../utils/funciton";
 import {clearCart} from '../utils/cartSlice'
 import CartEmpty from "./cartEmpty";
 import {AiFillStar} from 'react-icons/ai'
import {GrAdd} from 'react-icons/gr'
import {GrFormSubtract} from 'react-icons/gr'
import { FOOD_ITEM_IMAGE, IMG_URL } from './constant';
const Cart = () => {
    const cartItems = useSelector(store =>store.cart.items )

    let totalPrice=calculatePrice(cartItems)



    const updatedCartItems=removeDuplicates(cartItems)
  
    console.log("From cart updated items",updatedCartItems)


    var price



    //   cartItems.map((item)=>{
    //       if(item.price)
    //         price=item.price
    //       else if(item.defaultPrice)
    //         price=item.defaultPrice
    //   })
    
    function clearCartHandler()
    {
       dispatch(clearCart())
    }
    
    const dispatch=useDispatch()
    
    function cartAddHandler(item)
    {
        console.log("Now adding item from cart component is",item)
         dispatch(addItems(item.key))
    
    }
    
    function cartRemoveHandler(id)
    {
        console.log("Now removing id from component is",id)
        dispatch(removeItems(id))
    }
    
    if(updatedCartItems.length===0)
    {
        return(
            <CartEmpty/>
        )
        }
        return (
          <div className={"w-full h-full flex items-center mt-[4.5rem] justify-center p-[2rem]  flex-col object-cover "}>
               <h1 className={"text-3xl font-mono font-bold "}>Your Items<span className="mx-3">😋</span></h1>
            <div className={"mt-[3rem] w-[38vw] mx-[2rem] p-[2rem] "}>
             
              {updatedCartItems.map((item) => (
                <ul className="flex justify-between items-center my-3">
                  <img
                  src={
                    FOOD_ITEM_IMAGE +
                    item.key.imageId
                  }
                  alt={item.key.name}
                  className="h-[50px] w-[50px] rounded-lg bg-contain"
                />
                  <li><div className="w-[15vw] mx-2 px-2 ">{item.key.name}</div></li>
                  <div className="flex justify-between border m-1 border-gray-400">
              <button
                  className="bg-white text-lg h-[2rem] w-[2rem] border-b-gray-500 border-t-gray-500 border-l-gray-500 hover:shadow-lg text-gray-400 font-bold"
                  onClick={()=>cartRemoveHandler(item.key.id)}
                >
                  <GrFormSubtract/>
                </button>
                
                <h1 className="text-green-500 font-semibold mt-1 px-2  border-t-gray-400 border-b-gray-400">{item.value}</h1>
                
                <button
                  className="bg-white h-[2rem] w-[2rem]   border-b-gray-500 border-t-gray-500 border-r-gray-500  hover:shadow-lg text-green-500 font-bold"
                  onClick={()=>cartAddHandler(item)}
                >
                  <GrAdd/>
                </button>
                </div>
                  <li
                    // className=
                    // style={{
                    //   fontSize: "11px",
                    //   fontWeight: "600",
                      // fontFamily:
                      //   "ProximaNovaCondensedRegular,arial,Helvetica Neue,sans-serif",
                     
                    // }
                  // }
                  >
                    {/* <CurrencyRupee fontSize="small" /> */}
                    
                      
                    
                    {item.key.price?item.key.price*item.value/100:item.key.defaultPrice*item.value/100}
                  </li>
                </ul>
              ))}
              
            </div>
          
            <div className="border-b border-black border-y-2 w-[38vw]"></div>
           <div className={"w-[38vw] mx-[2rem] p-[2rem] "}>
              <div className="flex justify-between">
                  <h1 className="font-bold">To Pay</h1>
                  {/* <h1 className="font-bold"><CurrencyRupee fontSize="small"/>{totalPrice/100}</h1> */}
                  <h1 className="font-bold">{totalPrice/100}</h1>
                  
              </div>
           
           </div>
           <div className={"w-[38vw] flex justify-start " }>
           <span className="flex bg-red-500 hover:bg-red-700 justify-center items-center p-2 ">
           {/* <DeleteIcon/> */}
            <button className="" onClick={clearCartHandler}>Clear Cart</button>
            </span>
            </div>
      
          </div>
        );
      };
      
      export default Cart;
//     return (
//     <div className='' >
//       <h1 className=' m-5 p-5 font-bold text-3xl flex justify-center bg-green-400  '>Cart Items - {cartItems.length} </h1>
//       <div className='flex flex-wrap '>  
//      {/* <FoodItem {...cartItems[0]}/> */}
//      {
//        cartItems.map(((item) => <FoodItem key ={item.id} {...item} />))
//       }   </div>
//       <button className='bg-green-100 p-2 m-5' onClick={() =>handleClearCart()}> Clear cart</button>
    
//     </div>
//   )
// }

// export default Cart
