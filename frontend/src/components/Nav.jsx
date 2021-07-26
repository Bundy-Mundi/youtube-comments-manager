import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
    fontWeight: "bold",
    color: "red"
}

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/comments" >Comments</NavLink></li>
            </ul>
        </nav>
    )
};

export default Nav;