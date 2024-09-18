import React from "react";
import { useState, useEffect } from "react";

import brightness from "../assets/brightness.png";

import "../styles/navbar.css";

const Mode = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} className="mode">
                <img src={brightness} alt="button" className="mode_icon"/>
            </button>
        </div>
    );
};

export default Mode;