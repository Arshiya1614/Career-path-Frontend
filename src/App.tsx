import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Guides from "./Components/Guides";
import StartHere from "./pages/startHere";
import BestPractice from "./pages/BestPractice";
import ProjectIdeas from "./pages/ProjectIdeas";
import BookMarkedRm from  "./pages/BookMarkedRM";
import Questions from "./pages/Questions";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path ="/guides" element={<Guides/>} />
        <Route path ="/startHere" element={<StartHere/>} />
        <Route path ="/bestPractice" element={<BestPractice/>} />
        <Route path ="/projectIdeas" element={<ProjectIdeas/>} />
        <Route path ="/questions" element={<Questions/>} />
        <Route path ="/bookmarked-roadmaps" element={<BookMarkedRm/>} />




      </Routes>
    </Router>
  );
}

export default App;
