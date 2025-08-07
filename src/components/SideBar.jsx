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
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Only show sidebar if open and screen is md or larger
  if (!isMenuOpen || window.innerWidth < 768) return null;
  return (
    <aside className="hidden md:block p-2 md:p-5 w-20 md:w-56 shadow-lg relative bg-white h-screen overflow-y-auto">
      <ul className="mt-4">
        <Link to="/" className="">
          <li className="flex flex-col md:flex-row items-center md:items-center hover:cursor-pointer bg-gray-100 hover:bg-gray-200 border-gray-100 rounded-xl px-2 py-2 gap-y-1 gap-x-1">
            <IoMdHome size={22} />
            <span className="hidden md:inline">Home</span>
          </li>
        </Link>
        <li className="flex flex-col md:flex-row items-center md:items-center p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl gap-y-1 gap-x-2">
          <SiYoutubeshorts /> <span className="hidden md:inline">Shorts</span>
        </li>
        <li className="flex flex-col md:flex-row items-center md:items-center p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl gap-y-1 gap-x-2">
          <MdSubscriptions /> <span className="hidden md:inline">Subscriptions</span>
        </li>
      </ul>
      <h1 className="font-bold pt-5 hidden md:block">Subscriptions</h1>
      <ul className="hidden md:block">
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <FaMusic /> Music
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <IoTrophy /> Sports
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <SiYoutubegaming /> Gaming
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <MdLocalMovies /> Movies
        </li>
      </ul>
      <h1 className="pt-5 font-bold flex items-center gap-x-2 hidden md:flex">You <FaGreaterThan /></h1>
      <ul className="hidden md:block">
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <FaHistory /> History
        </li>
        <li className="flex py-2 px-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-1">
          <CgPlayList size={25} /> Plyalists
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <FaYoutube />Your Videos
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <MdWatchLater /> Watch Later
        </li>
        <li className="flex p-2 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl items-center gap-x-2">
          <AiFillLike /> Liked Videos
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
