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

const API_KEY = "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";

const AskQuestion = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello I am a farmer",
      sender: "ChatBot",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    // update message state
    setMessages(newMessages);

    // set isTyping to true
    setIsTyping(true);

    //process message to chatgpt
    await processMessage(newMessages);
  };

  async function processMessage(messages) {
    let apiMessages = messages.map((messageObj) => {
      let role = "";
      if (messageObj.sender === "ChatBot") {
        role = "assistant";
      } else {
        role = "user";
      }
      return {
        role: role,
        content: messageObj.message,
      };
    });
    //
    const systemMessage = {
      role: "system",
      content:
        "Explain all concepts in details with enthusiasm with the urge to help the farmer the answers they need as accurate as possible. Speak as an agricultural officer.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        console.log(res.choices[0].message.content);

        setMessages([
          ...messages,
          {
            message: res.choices[0].message.content,
            sender: "ChatBot",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div className="pt-28">
      <div className="p-20">
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatBot is typing" />
                ) : null
              }
            >
              {messages.map((message, index) => (
                <Message model={message} key={index} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default AskQuestion;
