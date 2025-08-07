import React from 'react'

const Comment = ({data}) => {
  const {name,text,replies}=data;

  return (
    <div className='flex bg-gray-50 rounded-lg p-2 my-2'>

           <img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
           <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
           </div>
    </div>
  )
}

export default Comment