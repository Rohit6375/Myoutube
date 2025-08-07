import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {
    const [text,setText]=useState(0);
    const [isDarkTheme,setDarkTheme]=useState(false);

    const prime= useMemo(()=> findPrime(text),[text]);      // heavy operation => memoize result of this function
        
         
//  console.log(prime);
  
    const toggleTheme=()=>{
        setDarkTheme(!isDarkTheme);
    }


  return (
    <div className={'m-4 p-4 w-96 h-96 relative border border-solid border-black' + (isDarkTheme && " bg-green-300 border-amber-200 text-white")}>

        <button className='p-2 mb-2 hover:cursor-pointer  border border-black' onClick={toggleTheme}>Theme</button>

        <div className='w-full'>
            <input className=' border w-68  border-black px-2 absolute ' type="number" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>

        <div>
            <h1 className='mt-8  text-xl font-bold'>
                nth Prime : {prime} 
            </h1>
        </div>
    </div>
  )
}

export default Demo