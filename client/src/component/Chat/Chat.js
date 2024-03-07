import React, { useEffect, useState } from "react";
import { user } from "../Join/Join";
import socketio from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../Image/send.png";
import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";

const ENDPOINT = "http://localhost:4500/";
let socket;
// ... (imports)

const Chat = () => {
  const [id, setid] = useState("");
  const [messages, setMessages] = useState([]);
  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  console.log(messages);

  useEffect(() => {
    socket = socketio(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      setid(socket.id);
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data.user, data.message);
    });

    socket.on("joined", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data.user, data.message);
    });

    socket.on("leave", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on('sendMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
        console.log(data.user, data.message, data.id);
    })
    return () => {
        socket.off();
    }
}, [messages])

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <ReactScrollToBottom className="chatBox">
          {messages.map((item, i) => (
            <Message
              key={i}
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input type="text" placeholder="lets chat" id="chatInput" />
          <button onClick={send} className="sendBtn">
            <img src={sendLogo} alt="logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
