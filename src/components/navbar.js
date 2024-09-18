import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

import Mode from "./mode";

const Navbar = () => {
    return (
            <nav className="navbar_head">
                <ul>              
                    <li className="home_navbar"><Link to="/">AAP</Link></li>             
                    <li className="other_navbar"><Link to="/work">WORK</Link></li>
                    <li className="other_navbar"><Link to="/education">EDUCATION</Link></li>
                    <li className="other_navbar"><Link to="/about">ABOUT ME</Link></li>
                    <li className="mode"><Mode/></li>         
                </ul>
            </nav>  
        );          
    };

export default Navbar;