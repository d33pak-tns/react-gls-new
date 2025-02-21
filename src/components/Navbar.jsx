// import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const buttonStyle = ` p-2 text-white bg-orange-500 rounded-sm`;
  return (
    <div className=" flex flex-col">
      <p className="p-2 text-xl text-gray-400">Nav:</p>
      <div className="p-4 w-screen flex flex-row justify-between ">
        <div className="flex flex-row justify-start">
          <button className={buttonStyle}>
            <Link to="/todo">TODO -&gt;</Link>
          </button>
        </div>
        <div className="flex flex-row">
          <button className={buttonStyle}>
            <Link to="/">Logout -&gt;</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
