import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage' ;
import LoginScreen from './Components/LoginScreen';
import MyProfile from './Components/MyProfile';
import MyArchitect from './Components/MyArchitect';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-architect" element={<MyArchitect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
