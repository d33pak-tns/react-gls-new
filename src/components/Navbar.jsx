import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { clearUser } from "../redux/userSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useSelector((state) => state.user);
  console.log(`isAuthenticated->`,isAuthenticated)

  const handleLogout = () => {
    // localStorage.setItem("isAuthenticated", "false");
    // localStorage.removeItem("currentUser");
    dispatch(setUser(null));
    dispatch(clearUser());
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="p-2 w-screen flex flex-col">
      <div className="w-screen flex flex-row justify-evenly items-center">
        <p className="text-xl text-gray-400">Nav:</p>

        <div className="flex flex-row space-x-4">
          <button className="p-2 text-white bg-blue-500 rounded-sm">
            <Link to="/about">About</Link>
          </button>

          {isAuthenticated && (
            <>
              <button className=" p-2 text-white bg-green-500 rounded-sm">
                <Link to="/home">Home</Link>
              </button>
              <button className="p-2 text-white bg-orange-500 rounded-sm">
                <Link to="/todo">TODO</Link>
              </button>
            </>
          )}
        </div>

        <div className="flex flex-row justify-center items-center">
          {isAuthenticated && currentUser ? (
            <p className="text-md text-gray-900 font-semibold">
              Welcome, {currentUser.name}
            </p>
          ) : (
            <p className="text-md text-gray-900 font-semibold">Status: Logged-out</p>
          )}
        </div>

        {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="p-2 text-white bg-red-500 rounded-sm"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
