import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.js";
import Home from './components/home.js';
import Work from './components/work.js';
import Education from "./components/education.js";
import About from "./components/about.js";


const App = () => {
return (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/work" element={<Work/>} />
                <Route path="/education" element={<Education/>} />
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    </Router> 
);
};

export default App;
