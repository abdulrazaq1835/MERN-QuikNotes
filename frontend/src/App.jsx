import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import toast from "react-hot-toast";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";


const App = () => {
  return (
    <div className="relative h-full w-full">
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-white via-blue-50 to-indigo-100" />

      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;