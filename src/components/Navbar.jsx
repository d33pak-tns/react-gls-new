// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setUser } from "../redux/userSlice"; // assuming setUser action exists
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const dispatch = useDispatch(); // Dispatch hook can only be used inside functional component
//   const navigate = useNavigate();
//   const { currentUser } = useSelector((state) => state.user);

//   const buttonStyle = ` p-2 text-white bg-orange-500 rounded-sm`;

//   const handleLogout = () => {
//     // Handle logout logic here
//     localStorage.setItem("isAuthenticated", "false");
//     localStorage.removeItem("currentUser");  // Remove user data from localStorage
//     dispatch(setUser(null));  // Dispatch action to set user as null in Redux store
//     navigate("/");  // Redirect to login page
//     window.location.reload();  // Reload the page to reset state
//   };

//   return (
//     <div className="flex flex-col">
//       <p className="p-2 text-xl text-gray-400">Nav:</p>
//       <div className="p-4 w-screen flex flex-row justify-between">
//         <div className="flex flex-row justify-start">
//           <button className={buttonStyle}>
//             <Link to="/todo">TODO -&gt;</Link>
//           </button>
//         </div>
//         <div className="flex flex-row justify-center items-center">
//           {/* Display the current user's name */}
//           <p className=" text-md text-gray-900 font-semibold">{currentUser ? `Welcome, ${currentUser.name}` : "Not logged in"}</p>
//         </div>
//         <div className="flex flex-row">
//           <button onClick={handleLogout} className={buttonStyle}>
//             Logout -&gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";  // If you're using Redux to track authentication status
// // import { useState } from 'react'; // Optional, if you need more state in Navbar


// const Navbar = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Check from Redux (or use localStorage)
  
//   const handleLogout = () => {
//     localStorage.setItem("isAuthenticated", "false"); // Set isAuthenticated to false in localStorage
//     // Reset Redux state if needed
//     // dispatch(logoutUser()); // If you're using Redux for auth state
//     navigate("/"); // Redirect to Login page
//     window.location.reload();  // Optionally reload to reset routing and state
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="p-4 w-screen flex flex-row justify-between items-center">
//         <p className="text-xl text-gray-400">Nav:</p>
        
//         <div className="flex flex-row space-x-4">
//           {/* About link is always visible */}
//           <button className="p-2 text-white bg-blue-500 rounded-sm">
//             <Link to="/about">About</Link>
//           </button>

//           {/* Home and Todo links are visible only if authenticated */}
//           {isAuthenticated && (
//             <>
//               <button className="p-2 text-white bg-green-500 rounded-sm">
//                 <Link to="/home">Home</Link>
//               </button>
//               <button className="p-2 text-white bg-orange-500 rounded-sm">
//                 <Link to="/todo">TODO</Link>
//               </button>
//             </>
//           )}
//         </div>

//         {/* Logout button */}
//         {isAuthenticated && (
//           <button onClick={handleLogout} className="p-2 text-white bg-red-500 rounded-sm">
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setUser } from "../redux/userSlice"; // Assuming setUser action exists
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { currentUser, isAuthenticated } = useSelector((state) => state.user);

//   const buttonStyle = `p-2 text-white bg-orange-500 rounded-sm`;

//   const handleLogout = () => {
//     // Handle logout logic
//     localStorage.setItem("isAuthenticated", "false");
//     localStorage.removeItem("currentUser");  // Remove user data from localStorage
//     dispatch(setUser(null));  // Dispatch action to set user as null in Redux store
//     navigate("/");  // Redirect to login page
//     window.location.reload();  // Reload the page to reset state
//   };

//   return (
//     <div className="flex flex-col">
//       <p className="p-2 text-xl text-gray-400">Nav:</p>
//       <div className="p-4 w-screen flex flex-row justify-between">
//         <div className="flex flex-row justify-start">
//           <button className={buttonStyle}>
//             <Link to="/todo">TODO -&gt;</Link>
//           </button>
//         </div>
//         <div className="flex flex-row justify-center items-center">
//           {/* Display the current user's name */}
//           {isAuthenticated && currentUser ? (
//             <p className="text-md text-gray-900 font-semibold">
//               Welcome, {currentUser.name}
//             </p>
//           ) : (
//             <p className="text-md text-gray-900 font-semibold">Not logged in</p>
//           )}
//         </div>
//         <div className="flex flex-row">
//           {isAuthenticated ? (
//             <button onClick={handleLogout} className={buttonStyle}>
//               Logout -&gt;
//             </button>
//           ) : (
//             <button className={buttonStyle}>
//               <Link to="/">Login -&gt;</Link>
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice"; // Assuming setUser action exists
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);

  // const buttonStyle = `p-2 text-white bg-orange-500 rounded-sm`;

  const handleLogout = () => {
    // Handle logout logic
    localStorage.setItem("isAuthenticated", "false");
    localStorage.removeItem("currentUser");  // Remove user data from localStorage
    dispatch(setUser(null));  // Dispatch action to set user as null in Redux store
    navigate("/");  // Redirect to login page
    window.location.reload();  // Reload the page to reset state
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 w-screen flex flex-row justify-between items-center">
        <p className="text-xl text-gray-400">Nav:</p>
        
        <div className="flex flex-row space-x-4">
          {/* About link is always visible */}
          <button className="p-2 text-white bg-blue-500 rounded-sm">
            <Link to="/about">About</Link>
          </button>

          {/* Home and Todo links are visible only if authenticated */}
          {isAuthenticated && (
            <>
              <button className="p-2 text-white bg-green-500 rounded-sm">
                <Link to="/home">Home</Link>
              </button>
              <button className="p-2 text-white bg-orange-500 rounded-sm">
                <Link to="/todo">TODO</Link>
              </button>
            </>
          )}
        </div>

        <div className="flex flex-row justify-center items-center">
          {/* Display the current user's name */}
          {isAuthenticated && currentUser ? (
            <p className="text-md text-gray-900 font-semibold">
              Welcome, {currentUser.name}
            </p>
          ) : (
            <p className="text-md text-gray-900 font-semibold">Not logged in</p>
          )}
        </div>

        {/* Logout button */}
        {isAuthenticated && (
          <button onClick={handleLogout} className="p-2 text-white bg-red-500 rounded-sm">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;




