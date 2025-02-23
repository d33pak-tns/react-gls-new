// /* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import redux hook
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Navbar from "./components/Navbar";
// import PrivateRoute from "./PrivateRoute";  // Import PrivateRoute component

const App = () => {
  // Access the authentication status from Redux store
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        {/* Private Routes (Protected) */}
        <Route
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" />} // If not authenticated, redirect to Login
        />
        <Route
          path="/todo"
          element={isAuthenticated ? <Todo /> : <Navigate to="/" />} // If not authenticated, redirect to Login
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
