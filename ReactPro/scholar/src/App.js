import React from "react";
import "./App.css";
import Top from "../src/components/Top";
import Footer from "../src/components/Footer";
import Login from "./components/Login";
import Top2 from "./components/Top2";
import Signup from "./components/Signup";
import Universities from "./components/Universities";
import Student from "./components/Student";
import Adduni from "./components/Adduni";
import Edituni from "./components/Edituni";
import Students  from "./components/Students";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Top />
        <ToastContainer />
        <div>
          <Routes>
            <Route path="/new" element={<Adduni />} />
            <Route path="/edit/:id" element={<Edituni />} />
            <Route path="/uni" element={<Universities />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/student" element={<Student />} />
            <Route path="/studentD" element={<Students />} />
            <Route path="/" exact element={<Top2 />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </div>
        {/* <Update/> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
