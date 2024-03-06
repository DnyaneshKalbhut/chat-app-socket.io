import React, { useEffect } from 'react';
import { user } from '../Join/Join';
import socketio from 'socket.io-client';
import './Chat.css';
import sendLogo from '../../Image/send.png';

const ENDPOINT = 'http://localhost:4500/';

const Chat = () => {
  useEffect(() => {
    const socket = socketio(ENDPOINT, { transports: ['websocket'] });

    socket.on('connect', () => {
      // alert('Connected');
      // Display a message or update UI to indicate successful connection
    });

    console.log(socket);
    socket.emit('joined', { user });

    socket.on('welcome', (data) => {
      console.log(data.user, data.message);
      // Update UI or handle the welcome message
    });

    socket.on('joined', (data) => {
      console.log(data.user, data.message);
      // Update UI or handle the joined message
    });

    socket.on('leave' ,(data)=>{
      console.log(data.user , data.message);
    })
    return () => {
      socket.disconnect();
      socket.off(); // Remove all event listeners (only if this is the only component using the socket)
    };
  }, []);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"></div>
        <div className="chatBox"></div>
        <div className="inputBox">
          <input type="text" placeholder="lets chat" id="chatInput" />
          <button className="sendBtn">
            <img src={sendLogo} alt="logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
