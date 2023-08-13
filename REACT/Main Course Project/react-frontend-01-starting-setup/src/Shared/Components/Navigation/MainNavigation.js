import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Backdrop from "../../UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import MainHeader from "./Mainheader";
import Navlinks from "./NavLinks";
import './MainNavigation.css';
const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer=() =>{
        setDrawerIsOpen(true);
    };
    const closeDrawer =() => {
        setDrawerIsOpen(false);
    };

    return (
    <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
    { drawerIsOpen && (<SideDrawer>
        <nav className="main-navigation__drawer-nav">
            <Navlinks/>
        </nav>
    </SideDrawer> )} 
    <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className="main-navigation__title">
           <Link to='/'> Your places </Link>
        </h1>
        <nav className= "main-navigation__header-nav"> 
        <Navlinks>

        </Navlinks>
        </nav>
    </MainHeader>
    </React.Fragment>
    ); 
};

export default MainNavigation;
//in react one must have only one root jsx element per component one can nest as many elements one wants. hence to use that one has to use <React.fragment> element.