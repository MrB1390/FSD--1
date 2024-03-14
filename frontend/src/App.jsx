import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/register";
import Login from "./Components/login";
import Emailverify from "./Components/Emailverify";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ToastContainer />
        </div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/add" element={<Register />} />
          <Route path="/verify" element={<Emailverify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
