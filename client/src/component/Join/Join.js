import React, { useState } from "react";
import "../Join/Join.css";
import { Link } from "react-router-dom";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};
const Join = () => {
  const [name, setName] = useState("");

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img
          src="https://threedio-cdn.icons8.com/FiGnnxLTjAksFduG3OQ40lM7zfSwOBUeRM77COxPXXQ/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzc4My9mMjgx/OGFhNy1hOTdlLTQx/ZWItODI3Zi1iYWNl/YjkyYWQxZjEucG5n.png"
          alt="logo"
        />
        <h1>Snappy</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
          id="joinInput"
        />
        <Link onClick={(e)=> !name ? e.preventDefault() : null } to="/chat">
          <button onClick={sendUser} className="Btn">
            Login
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Join;
export { user };
