import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto gap-2 md:gap-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <Button name="All" color="#000000" text="#ffffff" />
      <Button name="Magnus Carlsun" />
      <Button name="Javascript" />
      <Button name="Music" />
      <Button name="Datastructures" />
      <Button name="Gaming" />
      <Button name="Podcasts" />
      <Button name="Live" />
      <Button name="TakeuForward" />
      <Button name="BGMI" />
      <Button name="News" />
      <Button name="Roasts" />
      <Button name="Dramedy" />
      <Button name="Web Series" />
    </div>
  );
}

export default ButtonList