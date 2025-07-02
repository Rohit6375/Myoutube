import React from 'react'

const VideoCard = ({info}) => {
const formatViews = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num;
};

    if(!info) return null;
    console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle ,title, thumbnails}=snippet;
  return (
    <div className='font-medium p-2 m-2 w-82 shadow-lg hover:cursor-pointer hover:scale-105 transition-all duration-300'>
          <img className='rounded-2xl' src={thumbnails.medium.url} alt="thumbnail" />
          <ul className=''>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{formatViews(statistics?.viewCount)} views</li>
          </ul>
    </div>
  )
}

export default VideoCard;