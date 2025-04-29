
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
