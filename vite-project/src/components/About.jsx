import React from 'react'
import ProfileFunctionComponent from './Profile'
import Profile from './profileClass'
import { Outlet } from 'react-router-dom'
import UserContext from '../utils/UserContext'
import first from '../assets/D3.jpg'
import second from '../assets/D2.jpg'
const About = () => {
  return (
    <div className='m-2 p-2 '>
      <div className='flex m-5 p-5 mt-32 border to-black rounded-sm shadow-md'>
          {/* first */}
          <img src={first} className='w-[400px] h-[300px] m-4 rounded-md shadow-lg'
          alt="" />
          <p className='text-4xl font-custom italic'> Befoodie is an online food ordering system which we
              have developed for restaurant owners and food lovers. Through
              Befoodie we are helping customers to discover the best restaurants
              in city. If you are restaurant owner, you can easily register your
              restaurant and upload restaurant menu to start receiving online
              orders through this fast growing portal without any cost.
          </p>
      </div>
      <div className='flex  m-5 p-5 border to-black rounded-sm shadow-md'>

          <p  className='text-4xl font-custom italic'> For food lovers who want to order food from local restaurants
              online, the Food Ordering System will be an Internet-based
              application that will accept individual or group meal orders,
              process payments, and trigger delivery of the prepared meals to a
              designated location. For Restaurant owner who wants to take and grow
              their business online, with low budget can start their online
              restaurant business and get orders from many more customers.</p>
          <img src={second} className='w-[400px] h-[200px] m-4 rounded-md shadow-lg'alt="" />
      </div>
    </div>
  )
}

export default About
// <UserContext.Consumer >
//   {({user}) =>  <h4 className="  font-bold"> {user.name} - {user.email}</h4>}
// </UserContext.Consumer>

        {/* <ProfileFunctionComponent name={"nadeem "}/> */}
        {/* <Profile name={"nadeemclass "}/> */}
