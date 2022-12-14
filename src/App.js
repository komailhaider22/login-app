import "antd/dist/antd.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginPage/Login-Page";
import Navbar from "./components/Navbar/navbar";
import Signup from "./components/Sign-up";
import Directory from "./Home-Components/Directory";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
      <Route path="/home" element={<Directory />}></Route>
      <Route path="/" element={<LoginForm />}></Route>
    </Routes>
  );
};

export default App;
