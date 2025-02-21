// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginCumRegister = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [passVisible, setPassVisible] = useState(false);

  const [userData, setUserData] = useState([]);

  const [isValid, setIsValid] = useState("");

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPassVisible((passVisible) => !passVisible);
  };

  const handleUserStatus = () => {
    setNewUser((newUser) => !newUser);
  };

  const handleUserLogin = () => {
    const userMatched = userData.find(
      (user) => user.name === userName && user.password === userPassword
    );

    if (userMatched) {
      navigate("/home");
    } else {
      setIsValid("Not Valid Cred..");

      setTimeout(() => {
        setIsValid("");
      }, 1000);
    }
  };

  const handleUserReg = (e) => {
    e.preventDefault();

    console.log(`\n userName: ${userName} -> password: ${userPassword}`);
    const userMatched = userData.find(
      (user) => user.name === userName && user.password === userPassword
    );

    userMatched && alert(`User exist..!`);

    if (userName.trim() && userPassword.trim() && userPassword.trim()) {
      const newUserData = {
        id: Date.now(),
        name: userName,
        email: userEmail,
        password: userPassword,
        loggedIn: false,
      };
      setUserData((prevData) => [...prevData, newUserData]);

      setUserName("");
      newUser && setUserEmail("");
      setUserPassword("");
    }
  };

  useEffect(() => {
    console.log(`You are in authPage`);
  }, []);

  return (
    <div className="flex flex-row w-full h-screen justify-center">
      <div className=" mt-14 px-3 py-4 flex flex-col  w-[25rem] h-fit border-2 rounded-md shadow-md">
        <p className=" my-1 flex flex-row text-3xl font-medium text-gray-950 justify-center underline decoration-wavy decoration-purple-500">
          {newUser ? `-Register-` : `-Login-`}
        </p>
        <form
          className="flex flex-col"
          onSubmit={!newUser ? handleUserLogin : handleUserReg}
        >
          <label className=" my-2 text-gray-500 font-normal text-md">
            UserName:
          </label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="p-2 border-2 rounded-sm"
            placeholder="Enter here..."
            required
          />
          {newUser && (
            <>
              <label className=" my-2 text-gray-500 font-normal text-md">
                Email-id:
              </label>
              <input
                type="text"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                className="p-2 border-2 rounded-sm"
                placeholder="Enter here..."
                required
              />
            </>
          )}
          <label className=" my-2 text-gray-500 font-normal text-md">
            Password:
          </label>
          <div className="flex flex-row items-baseline">
            <input
              type={passVisible ? "text" : "password"}
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              className="p-2 border-2 rounded-sm flex-1"
              placeholder="Enter here..."
              required
            />
            <button
              onClick={handlePasswordVisibility}
              className="p-2 mx-1 w-10 "
            >
              👁️
            </button>
          </div>
          <div className="w-full h-fit flex flex-col justify-center items-center">
            {isValid && (
              <p className=" m-1 text-red-600 text-sm">
                Invalid cred.. pls try again...
              </p>
            )}
            <button
              type="submit"
              className=" my-2 w-[10rem] h-[2.5rem] text-white bg-green-500  m-1"
            >
              {newUser ? `Register` : `Login`}
            </button>
          </div>
        </form>

        <div className=" w-full h-fit flex flex-col justify-center items-center">
          <p className="text-sm text-gray-500 cursor-pointer">
            {newUser ? `Already have an Account?` : `Don't have an Account?`}
            <span
              onClick={handleUserStatus}
              className="text-blue-400 mx-1 cursor-pointer"
            >
              {newUser ? `login` : `register`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCumRegister;
