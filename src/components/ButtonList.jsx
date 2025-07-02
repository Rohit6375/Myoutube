import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
       <Button name="All" color="#000000" text='#ffffff'/>
       <Button name="Magnus Carlsun" />
       <Button name="Javascript"/>
       <Button name="Music"/>
       <Button name="Datastructures"/>
       <Button name="Gaming"/>
       <Button name="Podcasts"/>
       <Button name="Live"/>
       <Button name="TakeuForward"/>
       <Button name="BGMI"/>
       <Button name="News"/>
       <Button name="Roasts"/>
       <Button name="Dramedy"/>
       <Button name="Web Series"/>
    </div>
  )
}

export default ButtonList