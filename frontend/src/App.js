// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import SearchPage from './pages/SearchPage/SearchPage';
import React, { useState } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {

  const [currentVideo, setCurrentVideo] = useState(['aZGzwEjZrXc']);
  console.log(currentVideo)

  return (
    <div>
      <Navbar />
      <SearchPage setCurrentVideo = {setCurrentVideo}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage currentVideo = {currentVideo}/>  //^passed currentVideo as props to homepage
              {/* <VideoPage currentVideo = {currentVideo}/> */}
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
