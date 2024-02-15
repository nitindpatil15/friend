import React from "react";
import friend from './friends-4187953_1280.webp'
import './index.css'

const Friend = () => {
  return (
    <>
      <div className="container col my-5">
        <div className="container mx-2 mt-5">
          <h2 className="text-center text-success">Hey ! My Dear Friends</h2>
          <p className="text-dark text-center my-4" style={{fontSize:" 22px"}}>
          I want to say thank you for being with me on our journey and helping me whenever I face problems.
           Your support means a lot to me. <br />Thanks❤️!
          </p>
        </div>
      </div>
      <div className="container">
        <img src={friend} alt="friend" className="img" style={{width:"35%",minWidth:"200px"}} />
      </div>
      <h1 className="text-center text-primary my-5">❤️Thank You Buddy❤️ </h1>
      
    </>
  );
};

export default Friend;
