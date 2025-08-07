import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="w-full px-2 md:px-8 py-2 md:py-4">
      <div className="hidden md:block">
        <ButtonList />
      </div>
      <VideoContainer />
    </div>
  );
}

export default MainContainer