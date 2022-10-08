import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return <>
        <h1>Headings</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    </>
}

export default Header;