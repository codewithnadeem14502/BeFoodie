import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import {useSelector}  from 'react-redux';
import UserContext from "../utils/UserContext";
import cart from './Cart'
//  const {user} = useContext(UserContext);
//  const authenticateUser = () =>{
//   return true;
//  }
 
 const Title = () =>(
    <a href='/'>
    <img className = "w-[150px] "alt = "logo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEx5THJvW98s5xCAQku-wgzgFbLodfdlRXZtBuni9Ip3Y0aQZahF7aPFJc7LPZLYywgvjb8r-GkI&usqp=CAU&ec=48665701"/>
    </a>
    );
   
const Header = () =>{ 
  const [isLog,setisLog] = useState(false); 
  const {user} = useContext(UserContext);
  // acces the store
  const cartItems = useSelector(store => store.cart.items); 
  console.log(cartItems)
  const isOnline = useOnline();  
    return (
      <div className="flex justify-items-en bg-white shadow-xl w-[100rem] top-0 fixed" >
        <Title/>
      <div className='nav-items ml-[350px] '>
      <ul className="flex py-5  ">
       
        <li className="px-6 font-bold text-2xl hover:bg-yellow-400 rounded-md p-2 text-black"> <Link to="/">Home </Link></li>
        <li className="px-6 font-bold   text-2xl hover:bg-yellow-400 rounded-md p-2 text-black"><Link to="/about"> About  </Link></li>
        <li className="px-6 font-bold  text-2xl hover:bg-yellow-400 rounded-md p-2 text-black"> <Link to="/contact">Contact </Link></li>
        {/* <li className="px-6 font-medium hover:bg-red-400 rounded-sm p-2 text-white">Cart</li> */}
        <li className="px-6 font-bold  text-2xl hover:bg-yellow-400 rounded-md p-2 text-black"> <Link to="/Instamart">Instamart </Link></li>
      
        <li className="px-6 font-bold  text-2xl hover:bg-yellow-400 rounded-md p-2 text-black">   <Link to='/cart'> Cart - {cartItems.length}
        </Link></li>
      <h3 className="m-5 text-black font-bold">{isOnline? 'Status ✅' :'🔴 '}</h3>
      </ul>
      </div>
      {/* <span className=" mt-3  font-bold"> {user.name}</span> */}
   
     
      {/* { 
      isLog ?
      (<button className=" rounded-md font-bold bg-slate-200"  onClick={() => setisLog(false) }>logout</button> )
          :  
          (<button className="m-5  p-5 rounded-md font-bold bg-slate-200 " onClick={() => setisLog(true) }>login</button> )
      } */}
    
      </div>
    );
  }
export default Header;  