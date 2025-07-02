import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null; // early return
  return (
    <div className="p-5 w-56 shadow-lg">
      <ul>
       <Link to="/" > <li className="flex hover:cursor-pointer bg-gray-100 hover:bg-gray-200 border-gray-100  items-center rounded-xl px-1 py-2 gap-x-1">
         <IoMdHome size={20} />
          Home
         
        </li> </Link> 
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl  items-center  gap-x-2">
          <SiYoutubeshorts /> Shorts
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
          <MdSubscriptions /> Subscriptions
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
          <FaMusic />
          Music
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
          <IoTrophy />
          Sports
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
          <SiYoutubegaming/>
          Gaming
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
          <MdLocalMovies/>
          Movies
        </li>
      </ul>
      <h1 className="pt-5 font-bold flex items-center gap-x-2">You <FaGreaterThan/> </h1>
      <ul>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
          <FaHistory/>
          History
        </li>
        <li className="flex py-2 px-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-1">
         <CgPlayList size={25}/> Plyalists
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
          <FaYoutube/>Your Videos
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
         <MdWatchLater/> Watch Later
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl   items-center  gap-x-2">
       <AiFillLike/>   Liked Videos
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
