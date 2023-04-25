import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () =>{ 
  const {user} = useContext(UserContext);
    return (
     <>
      
       <div className='h-[4.5rem] z-10 w-full flex items-center justify-center  bg-yellow-300 bottom-0'>
        
       <span className="text-black">Created By ❤️ <span className='font-bold'>Mohd Nadeem </span><span> © 2023 </span> <span className="font-semibold">Be</span><span className="text-red-500 font-semibold">Foodie</span></span>
       </div>
     </>
    )
  }
export default Footer;