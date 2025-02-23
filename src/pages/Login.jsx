 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import redux hooks
import { setUsers, setError, setUser } from "../redux/userSlice"; // Import actions for Redux

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get users from Redux store
  const { users, error } = useSelector((state) => state.user);

  // Local state for login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passVisible, setPassVisible] = useState(false); // State for showing password

  // Fetch users when component mounts
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log("Fetched data:", data);
        dispatch(setUsers(data)); // Dispatch the fetched data to the Redux store
      } catch (error) {
        console.error("Error fetching users:", error);
        dispatch(setError(error.message)); // Dispatch error to Redux store
      }
    }

    fetchUsers();
  }, [dispatch]);

  // Handle password visibility
  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPassVisible((prevState) => !prevState);
  };

  // const handleLogin = () => {
  //   console.log("Users fetched: ", users);

  //   const user = users.find((user) => user.email === email);
  //   console.log("User found: ", user);

  //   if (user) {
  //     const userPasswordKey = `VITE_APP_USER_${user.id}_PASSWORD`; // Correct the key
  //     const storedPassword = import.meta.env[userPasswordKey];
  //     console.log("Stored password: ", storedPassword);

  //     if (password === storedPassword) {
  //       console.log("Password matched. Redirecting to home...");

  //       // Store user details in Redux and localStorage
  //       dispatch(setUser({ username: user.name, email: user.email }));
  //       localStorage.setItem("isAuthenticated", "true");
  //       navigate("/home"); // Navigate to Home page if password is correct
  //     } else {
  //       console.log("Invalid password.");
  //       setLoginError("Invalid password");
  //     }
  //   } else {
  //     console.log("User not found.");
  //     setLoginError("User not found, please register");
  //     setTimeout(() => {
  //       navigate("/register");
  //     }, 2000);
  //   }
  // };
  // const handleLogin = () => {
  //   const user = users.find((user) => user.email === email);
  //   if (user) {
  //     const userPasswordKey = `VITE_APP_USER_${user.id}_PASSWORD`;
  //     const storedPassword = import.meta.env[userPasswordKey];
      
  //     if (password === storedPassword) {
  //       // Save current user to Redux and localStorage
  //       dispatch(setUser(user));  // Dispatch user to Redux store
  //       localStorage.setItem('currentUser', JSON.stringify(user));  // Save user to localStorage
        
  //       navigate("/home");
  //     } else {
  //       setLoginError("Invalid password");
  //     }
  //   } else {
  //     setLoginError("User not found, please register");
  //     setTimeout(() => {
  //       navigate("/register");
  //     }, 2000);
  //   }
  // };
  // handleLogin function
const handleLogin = () => {
  const user = users.find((user) => user.email === email);

  if (user) {
    const userPasswordKey = `VITE_APP_USER_${user.id}_PASSWORD`; 
    const storedPassword = import.meta.env[userPasswordKey];

    if (password === storedPassword) {
      // On successful login, set the user and authentication status in Redux
      dispatch(setUser(user));
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      setLoginError("Invalid password");
    }
  } else {
    setLoginError("User not found, please register");
  }
};

  return (
    <div className="flex flex-row w-full h-screen justify-center">
      <div className="mt-14 px-3 py-4 flex flex-col w-[25rem] h-fit border-2 rounded-md shadow-md">
        <p className="my-1 flex flex-row text-3xl font-medium text-gray-950 justify-center underline decoration-wavy decoration-purple-500">
          -Login-
        </p>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <label className="my-2 text-gray-500 font-normal text-md">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-2 rounded-sm"
            required
          />

          <label className="my-2 text-gray-500 font-normal text-md">Password:</label>
          <div className="flex flex-row items-baseline">
            <input
              type={passVisible ? "text" : "password"} // Show password if passVisible is true
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border-2 rounded-sm flex-1"
              required
            />
            <button
              onClick={handlePasswordVisibility}
              className="p-2 mx-1 w-10 "
            >
              👁️
            </button>
          </div>

          {loginError && (
            <p className="m-1 text-red-600 text-sm">{loginError}</p>
          )}

          {error && (
            <p className="m-1 text-red-600 text-sm">{error}</p> // Show error from Redux
          )}

          <div className="w-full h-fit flex flex-col justify-center items-center">
            <button
              type="submit"
              onClick={handleLogin} // Trigger login on button click
              className="my-2 w-[10rem] h-[2.5rem] text-white bg-green-500 m-1"
            >
              Login
            </button>
          </div>
        </form>

        <div className="w-full h-fit flex flex-col justify-center items-center">
          <p className="text-sm text-gray-500 cursor-pointer">
            Don&apos;t have an Account?
            <span
              onClick={() => navigate("/register")}
              className="text-blue-400 mx-1 cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
