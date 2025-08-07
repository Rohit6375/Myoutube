import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMesagges = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(15),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border to-black w-full h-[600px] rounded-lg bg-slate-100 overflow-y-auto flex flex-col-reverse ">
        {chatMesagges.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full ml-3 " onSubmit={(e)=>{
                e.preventDefault();
                console.log("submitted",liveMessage);
                dispatch(addMessage({
                  name:"Rohit",
                  message:liveMessage
                }));
                setLiveMessage("");
      }}>
        <input
          type="text"
          className="border border-black w-96 p-2 mt-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button type="submit" className="px-2 mx-2 bg-green-100 m-2">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
