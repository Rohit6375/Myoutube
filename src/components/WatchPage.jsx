import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  // const params=useParams(); instead use useSearchParams()

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 md:p-8 w-full min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-2 md:p-8 mb-6 mt-4">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=f0J9xM5qjmCWuzYt&autoplay=1"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 px-2 md:px-0">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">Now Playing</h2>
            <p className="text-gray-600 text-sm md:text-base">Enjoy your video! Scroll down for live chat and comments.</p>
          </div>
        </div>
        <div className="w-full max-w-3xl bg-white rounded-xl shadow p-2 md:p-4 mb-8">
          <CommentsContainer />
        </div>
      </div>
      <div className="w-full lg:w-96 flex-shrink-0">
        <div className="bg-white rounded-xl shadow p-2 md:p-4 h-full mt-4 lg:mt-0">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
