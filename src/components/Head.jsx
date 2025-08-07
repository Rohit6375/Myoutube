import React, { useEffect, useState, useRef } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const mobileInputRef = useRef(null);
  const mobileButtonRef = useRef(null);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery) return;
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await res.json();

      if (!Array.isArray(json[1])) {
        setSuggestions([]);
        return;
      }

      setSuggestions(json[1]);
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleMobileBlur = (e) => {
    if (mobileButtonRef.current && e.relatedTarget === mobileButtonRef.current) return;
    setShowSuggestions(false);
    setMobileSearchOpen(false);
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    getSearchSuggestions();
    setShowSuggestions(false);
    setMobileSearchOpen(false);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 shadow-md items-center px-2 py-2 md:px-8 md:py-0 w-full bg-white sticky top-0 z-50">
      {/* Logo and Hamburger */}
      <div className="flex col-span-2 md:col-span-1 items-center gap-2">
        <div className="hover:rounded-full hover:bg-gray-200 p-2 md:p-3 hover:cursor-pointer" onClick={toggleMenuHandler}>
          <RxHamburgerMenu size={22} />
        </div>
        <img className="h-8 md:h-14 w-auto" src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png" alt="yt-logo" />
      </div>

      {/* Search Bar */}
      <div className="col-span-8 md:col-span-10 flex flex-col items-center justify-center relative w-full">
        {/* Desktop Search */}
        <div className="w-full flex justify-center mt-2 md:mt-0">
          <div className="hidden md:flex w-full max-w-2xl">
            <input
              className="w-full border border-solid rounded-l-full p-2 px-5 text-base focus:outline-none min-w-0"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="p-2 px-4 border border-solid rounded-r-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
              <CiSearch size={24} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="flex md:hidden w-full justify-end items-center relative">
            {!mobileSearchOpen && (
              <button
                className="p-2 border border-solid rounded-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer"
                onClick={() => setMobileSearchOpen(true)}
              >
                <CiSearch size={24} />
              </button>
            )}
            {mobileSearchOpen && (
              <form className="absolute left-0 top-0 w-full flex z-20 animate-fade-in" onSubmit={handleMobileSearch}>
                <input
                  autoFocus
                  ref={mobileInputRef}
                  className="w-full border border-solid rounded-l-full p-2 px-4 text-base focus:outline-none min-w-0 bg-white"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={handleMobileBlur}
                />
                <button
                  ref={mobileButtonRef}
                  type="submit"
                  className="p-2 px-3 border border-solid rounded-none bg-gray-100 hover:bg-gray-200 hover:cursor-pointer rounded-r-full"
                >
                  <CiSearch size={20} />
                </button>
                <button
                  type="button"
                  className="p-2 px-3 border border-solid border-l-0 rounded-r-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer"
                  onClick={() => {
                    setMobileSearchOpen(false);
                    setShowSuggestions(false);
                  }}
                >
                  <IoMdClose size={20} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="bg-white absolute top-12 left-1/2 -translate-x-1/2 py-2 px-4 w-full max-w-2xl md:max-w-2xl rounded-lg shadow-lg z-10 md:left-1/2 md:translate-x-[-50%] md:w-full">
            <ul>
              {suggestions.map((s, index) => (
                <li key={index} className="p-2 shadow-sm flex items-center gap-1 hover:bg-gray-100 text-base">
                  <CiSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* User Icon */}
      <div className="flex col-span-2 md:col-span-1 items-center justify-end">
        <img className="h-6 md:h-8 w-auto" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
