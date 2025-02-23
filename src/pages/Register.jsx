import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Updated for v6

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated for v6

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passVisible, setPassVisible] = useState(false); // For password visibility toggle

  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setPassVisible((passVisible) => !passVisible);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !email || !username || !password) {
      setError("Please fill all the fields");
      return;
    }

    // Create a new user object
    const newUser = {
      id: Date.now(), // Use current timestamp as unique ID
      name,
      username,
      email,
      password,
      address: {},
      phone: "",
      website: "",
      company: {},
    };

    // Dispatch action to store the user data in the Redux store (optional)
    dispatch({ type: "users/addUser", payload: newUser });

    // Navigate to Home page after registration
    navigate("/home"); // Updated for v6
  };

  return (
    <div className="flex flex-row w-full h-screen justify-center">
      <div className=" mt-14 px-3 py-4 flex flex-col  w-[25rem] h-fit border-2 rounded-md shadow-md">
        <p className=" my-1 flex flex-row text-3xl font-medium text-gray-950 justify-center underline decoration-wavy decoration-purple-500">
          -Register-
        </p>
        <form className="flex flex-col" onSubmit={handleRegister}>
          <label className=" my-2 text-gray-500 font-normal text-md">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border-2 rounded-sm"
            required
          />

          <label className=" my-2 text-gray-500 font-normal text-md">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border-2 rounded-sm"
            required
          />

          <label className=" my-2 text-gray-500 font-normal text-md">
            Username:
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border-2 rounded-sm"
            required
          />

          <label className=" my-2 text-gray-500 font-normal text-md">
            Password:
          </label>
          <div className="flex flex-row items-baseline">
            <input
              type={passVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border-2 rounded-sm flex-1"
              placeholder="Enter your password"
              required
            />
            <button
              onClick={handlePasswordVisibility}
              className="p-2 mx-1 w-10 "
            >
              👁️
            </button>
          </div>

          {error && <p className=" m-1 text-red-600 text-sm">{error}</p>}

          <div className="w-full h-fit flex flex-col justify-center items-center">
            <button
              type="submit"
              className=" my-2 w-[10rem] h-[2.5rem] text-white bg-green-500  m-1"
            >
              Register
            </button>
          </div>
        </form>

        <div className=" w-full h-fit flex flex-col justify-center items-center">
          <p className="text-sm text-gray-500 cursor-pointer">
            Already have an Account?
            <span
              onClick={() => navigate("/")}
              className="text-blue-400 mx-1 cursor-pointer"
            >
              login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
