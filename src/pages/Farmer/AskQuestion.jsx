import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const AskQuestion = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello I am a farmer",
      sender: "ChatBot",
    },
  ]);

  const handleSend = async (message)=>{
    const newMessage= {
      message: message,
      sender: "user",
      direction: "outgoing",
    }
    const newMessages = [...messages, newMessage]
    // update message state
    setMessages(newMessages)

    //process message to chatgpt
  }
  return (
    <div className="pt-28">
      <div className="h-[80%] w-[70%]">
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message, index) => (
                <Message model={message} key={index} />
              ))}
            </MessageList>
            <MessageInput
              placeholder="Type message here"
              onSend={handleSend}
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default AskQuestion;
