import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Todo from "../pages/Todo";
import About from "../pages/About";

const PrivateRoutes = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />

      <Route
        path="/home"
        element={isAuthenticated ? <Home /> : <Navigate to="/" />}
      />
      <Route
        path="/todo"
        element={isAuthenticated ? <Todo /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default PrivateRoutes;
