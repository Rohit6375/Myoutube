import React, { useEffect, useState } from 'react'
import { YOUTUBE_INFINITE_SCROLL_API, YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () =>{
  // console.log("api url", YOUTUBE_INFINITE_SCROLL_API)

  const [videos,setVideos]=useState([]);
  const [nextPageToken,setNextPageToken]=useState("");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);


  useEffect(()=>{
    getVideos();
  },[]);

   useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageToken]);

  const getVideos=async(pageToken = "")=>{
    const data=await fetch(YOUTUBE_INFINITE_SCROLL_API(pageToken));
    const json=await data.json();
    // console.log(json.items);
   setVideos(prev => [...prev, ...json.items]); 

    setNextPageToken(json.nextPageToken);
   
  };
    const handleScroll = () => {
      console.log("scrolling triggered")
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight && nextPageToken
    ) {
      getVideos(nextPageToken);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 w-full">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer