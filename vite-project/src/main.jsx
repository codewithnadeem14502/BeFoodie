import React, { lazy,Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './index.css'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
// import About from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import RestrauntMeun from './components/RestrauntMeun'
import Profile from './components/Profile'
import Shimmer from './components/Shimmer'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux';
import store from './utils/store'
import Cart from './components/Cart'
// import Instamart from './components/Instamart'
// import UseMain from "./utils/useMenu"
// lazy import / dynamic import chucking 
const Instamart = lazy(() => import("./components/Instamart"));

const About = lazy(() => import("./components/About"));
const Applayout = () =>{
  const [user,setUser] = useState({
    name:"Mohd Nadeem",
    email: "codewithnadeem@gmail.com",
  });
  return( 
    <Provider store = {store}>
    <UserContext.Provider value ={{user:user,setUser: setUser}}>
   <Header/>
   <Outlet/>
    <Footer /> 
    </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:
        (<Suspense fallback={<h1> Loading..... </h1>}>
          <About/>
          </Suspense>
          ),
        children:[
          {
            path:"profile",
            element: <Profile/>
          },
        ],
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestrauntMeun/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/Instamart",
        element:
        (<Suspense fallback={<Shimmer/>}>
          <Instamart/>
          </Suspense>
),},
    ]
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={appRouter} />
)
