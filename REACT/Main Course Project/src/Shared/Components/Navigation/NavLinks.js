import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import './NavLinks.css';

const Navlinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to = '/' exact>
                ALL USERS
            </NavLink>
        </li>
        <li>
            <NavLink to = '/u1/places'>
                MY Places
            </NavLink>
        </li>
        <li>
            <NavLink to = '/places/new'>
                Add Place
            </NavLink>
        </li>
        <li>
            <NavLink to = '/auth'>
                Authenticate
            </NavLink>
        </li>

    </ul>

};
 //what exact keyword does is that it only  marks that link active when only and only / is used
export default Navlinks;
