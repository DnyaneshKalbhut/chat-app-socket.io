import React, { useEffect } from 'react'
import {user} from '../Join/Join'
import socketio from 'socket.io-client'
import "./Chat.css"
import sendLogo from "../../Image/send.png"

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {
const socket = socketio(ENDPOINT,{transports:['websocket']})

useEffect(() => {
    socket.on('connect',()=>{
        alert("connected")
    })

  return () => {
    
  }
}, [socket]);


  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'></div>
            <div className='chatBox'></div>
            <div className='inputBox'>
                <input type="text" placeholder='lets chat' id='chatInput' />
                <button className="sendBtn"> < img  src={sendLogo} alt="" srcset="" /> </button>
            </div>
        </div>
    </div>
  )
}



export default Chat