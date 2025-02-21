// import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import LoginCumRegister from "./pages/LoginCumRegister";
// import LoginCumRegister from "./pages/LoginCumRegister";

function App() {
  return (
    <div className="font-mono">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginCumRegister />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
