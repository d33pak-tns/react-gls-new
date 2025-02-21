// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
