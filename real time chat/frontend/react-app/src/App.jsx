import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

import "./App.css";

const socket = io("http://localhost:3001");
function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isCall, setCall] = useState(true);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef();
  const remoteVedioRef = useRef();

  useEffect(() => {
    // Listen for incoming messages
    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  const handleMessageChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleMessageSend = () => {
    socket.emit("message", inputMessage);
    setInputMessage("");
  };
  const StartCall = () => {
    setCall(true);
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        setRemoteStream(stream);
        socket.emit("call", {});
      });
  };
  return (
    <>
      <div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={inputMessage}
            onChange={handleMessageChange}
          />
          <button onClick={handleMessageSend}>Send</button>
        </div>
        {isCall && (
          <div>
            <video ref={localVideoRef} autoPlay></video>
            <video ref={remoteVedioRef} autoPlay></video>
          </div>
        )}
        <button onClick={StartCall}>video call</button>
      </div>
    </>
  );
}

export default App;
