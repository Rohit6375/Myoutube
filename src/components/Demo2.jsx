import React, { useRef, useState } from 'react'

const Demo2 = () => {
    const [y, sety]=useState(0)
    let x=0;
  const ref=useRef(0); // not like ref=0 but ref={current :0}
  return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>
        <div >
        <button 
        onClick={()=> {x=x+1
            console.log("x = ",x);
        }
        } 
        className='border border-black p-2 m-2'>Increase x</button>
             <h1 className='font-bold text-xl p-2'>
              let x = {x}
             </h1>
        </div>
        <div >
        <button 
        onClick={()=> {sety(y+1);
            console.log("y = ",y);}
        } 
        className='border border-black p-2 m-2'>Increase Y</button>
             <h1 className='font-bold text-xl p-2'>
              state = {y}
             </h1>
        </div>
        <div >
        <button 
        onClick={()=> {ref.current=ref.current+1
            console.log("ref",ref.current);}
        } 
        className='border border-black p-2 m-2'>Increase ref</button>
             <h1 className='font-bold text-xl p-2'>
              Ref = {ref.current}
             </h1>
        </div>
    </div>
  )
}

export default Demo2
