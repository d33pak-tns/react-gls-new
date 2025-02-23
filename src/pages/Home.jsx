// import React from 'react'

import { useEffect } from "react";
// import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    console.log(`You are in Home-Page...`);
  }, []);
  
  return (
    <div className="w-screen h-fit flex flex-col justify-center items-center ">
      {/* <Navbar /> */}
      <p className="my-3 text-gray-500 text-xl">Welcome to Home Page...</p>
    </div>
  );
}
