import React from 'react'

const Button = ({name,color,text}) => {
  return (
    <div>
        <button className='px-2 py-1 m-3 rounded-lg font-medium bg-gray-100 hover:cursor-pointer'style={{background:color,color:text}} >{name}</button>
    </div>
  )
}

export default Button