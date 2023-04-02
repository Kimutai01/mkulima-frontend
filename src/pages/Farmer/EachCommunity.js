import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiSend } from "react-icons/fi";

const EachCommunity = ({ loggedInUserId }) => {
  const [community, setCommunity] = useState({});
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/communities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCommunity(data);
        setMessages(data.messages);
      });
  }, [community]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (textMessage !== "") {
      fetch("http://127.0.0.1:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: textMessage,
          user_id: Number(loggedInUserId),
          community_id: Number(id),
        }),
      })
        .then((response) => response.json())

        .then((data) => {
          setTextMessage("");
        });
    }
  };

  return (
    <div className="pt-24">
      <div className="w-[50%]  mx-auto min-h-[80vh] flex flex-col justify-between shadow-gray-200 shadow-xl ">
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <div
              className={
                message.user_id === loggedInUserId
                  ? "flex justify-end px-2  "
                  : "flex justify-start px-2"
              }
            >
              <div
                className={
                  message.user_id === loggedInUserId
                    ? "flex flex-col  px-2 bg-gray-100 p-2 rounded-xl  "
                    : "flex flex-col px-2 bg-[#3B841F] p-2 rounded-xl text-white"
                }
              >
                <p
                  className=" quicksand md:max-w-[100%]
                      text-start
                    max-w-[90%] "
                >
                  {message.text}
                </p>
                {message.user_id !== loggedInUserId && (
                  <div className="flex my-4 gap-2">
                    <img
                      src={message.user_profile}
                      className="w-8 h-8 rounded-full"
                      alt="customer"
                    />

                    <p className="font-bold text-xl">{message.user_name}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <textarea
            type={"text"}
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
            className=" border border-gray-300 h-[100px]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Type your message here..."
          />
          <FiSend
            size={25}
            className="absolute right-2 cursor-pointer hover:scale-105 transition-all duration-500 bottom-2 "
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default EachCommunity;
