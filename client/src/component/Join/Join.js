import React from 'react'
import  '../Join/Join.css'


const Join = () => {
  return (
    <div className='JoinPage'>
        <div className='JoinContainer'>
            <img src="https://threedio-cdn.icons8.com/FiGnnxLTjAksFduG3OQ40lM7zfSwOBUeRM77COxPXXQ/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzc4My9mMjgx/OGFhNy1hOTdlLTQx/ZWItODI3Zi1iYWNl/YjkyYWQxZjEucG5n.png" alt="logo" />
             <h1>Snappy</h1>
        <input type="text" placeholder='Enter Your Name'/>
        <button>Login</button>
        </div>


    </div>
  )
}

export default Join