import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setUsers, setError } from "../redux/userSlice";
// import { fetchUsers } from "../utils/fetchUsers";
// import { fetchUsersData } from "../api/jsonData";
import { fetchUsers } from "../api/jsonData";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passVisible, setPassVisible] = useState(false);


  useEffect(() => {
    console.log(`Fetching User...`);
    fetchUsers(dispatch);
  }, [dispatch]);

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPassVisible((prevState) => !prevState);
  };

  const handleLogin = () => {
    console.log(email);
    const user = users.find((user) => user.email === email);

    // console.log(user);
    if (user) {
      const userPasswordKey = `VITE_APP_USER_${user.id}_PASSWORD`;
      const storedPassword = import.meta.env[userPasswordKey];

      if (password === storedPassword) {
        dispatch(setUser(user));
        // localStorage.setItem("isAuthenticated", "true");
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
          <label className="my-2 text-gray-500 font-normal text-md">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-2 rounded-sm outline-none"
            required
          />

          <label className="my-2 text-gray-500 font-normal text-md">
            Password:
          </label>
          <div className="flex flex-row items-baseline border-2 rounded-sm">
            <input
              type={passVisible ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 outline-none flex-1"
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
            <p className="m-1 text-red-600 text-sm">{error}</p> 
          )}

          <div className="w-full h-fit flex flex-col justify-center items-center">
            <button
              type="submit"
              onClick={handleLogin}
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
