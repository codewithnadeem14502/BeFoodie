import React from 'react'
// import { useSelector } from 'react-redux';

const Shimmer2 = () => {
    return (
        <>
       {/* <div  key={index}  className='w-10 h-10 rounded-3xl bg-red-500'> </div> */}

        <div >
          {Array(10)
            .fill("")
            .map((e,index) => (
                <div  key={index}  className='w-10 h-10     rounded-3xl  bg-slate-400'> 
              <div   className=" w-[250px] h-5 p-2 m-6  ml-[50px]    bg-slate-400">
              </div>
              </div>
            ))}
        </div>
        </>
      );
    };
export default Shimmer2