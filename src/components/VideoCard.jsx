import React from 'react'

const VideoCard = ({info}) => {
const formatViews = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num;
};

    if(!info) return null;
    // console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle ,title, thumbnails}=snippet;
  return (
    <div className="font-medium p-2 m-2 w-[95vw] max-w-sm md:w-full md:max-w-sm shadow-lg hover:cursor-pointer transition-all duration-300 bg-white rounded-xl flex flex-col">
      <img className="rounded-2xl w-full h-64 md:h-48 object-cover" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="mt-2">
        <li className="font-bold py-1 text-base md:text-lg line-clamp-2">{title}</li>
        <li className="text-sm md:text-base text-gray-600">{channelTitle}</li>
        <li className="text-xs md:text-sm text-gray-500">{formatViews(statistics?.viewCount)} views</li>
      </ul>
    </div>
  );
};

// export const AdVideoCard=({info})=>{
//     return (
//         <div className='border border-solid border-black'>
//             <VideoCard info={info}/>
//         </div>
//     )
// };                       Higher Order Component

export default VideoCard;