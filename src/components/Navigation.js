import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;