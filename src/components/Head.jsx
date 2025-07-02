import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
   const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    console.log("toggled")
   
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col shadow-md  '>
        <div className='flex col-span-1 items-center gap-2 mx-8'>
            <div className='hover:rounded-full hover:bg-gray-200 p-3 hover:cursor-pointer' onClick={toggleMenuHandler} >
                <RxHamburgerMenu size={22} />
              
            </div>
         
          <img className='h-14' src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" alt="yt-logo" />
        </div>
         <div className='flex col-span-9 items-center justify-center -ml-52  '>
            <input className='w-1/2 border border-solid rounded-l-full p-2' type="text" placeholder='Search' />
            <button className=' p-2 px-4 border border-solid rounded-r-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer'><CiSearch size={24}/></button>
         </div>
         <div className='flex col-span-1 items-center'>
           <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
         </div>
    </div>
  )
}

export default Head;