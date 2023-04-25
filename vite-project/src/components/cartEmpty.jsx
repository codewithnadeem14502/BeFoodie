import React from 'react'
// import EmptyCart from '../assets/CartIsEmpty.png'
import EmptyCart from '../assets/D2.jpg'

import { useSelector } from 'react-redux'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const CartEmpty = () => {


  

 
  return (
    <div className={"w-full h-screen flex flex-col items-center p-[6rem] "}>
      <div className='w-[50vw] h-[60vh] object-fill flex justify-center bg-bl'>
      <img src={EmptyCart} alt="EmptyCart" className='w-[40vw] rounded-2xl' />
      </div>
      <h1 className={"text-3xl font-bold font-mono "}>Your Cart is Empty!</h1>
      <span className="bg-green-600 p-2 m-2 rounded-lg hover:shadow-2xl hover:bg-green-500">
     <Link to='/'><button className={"font-mono "}>Go Back and get your favourite food</button></Link> 
      </span>

    </div>
  )
}

export default CartEmpty