import React from "react";
import "../styles/Navbar.css"
import {ReactComponent as Iconlogo} from '../logos/Icon.svg';
import {ReactComponent as Titlelogo} from '../logos/Nexcent.svg';
/*
I didnt use the both classname left and right section
*/
export default function Navbar(){

    return (
        <div className="Navbar">
            <div className="left-section-navbar"> 
                <Iconlogo/>
                <Titlelogo/>
            </div>
            <div className="right-section-navbar">
                <button className="navbar-buttons home-button">
                    Home
                </button>
                <button className="navbar-buttons">
                    Features
                </button>
                <button className="navbar-buttons">
                    Community
                </button>
                <button className="navbar-buttons">
                    Blog
                </button>
                <button className="navbar-buttons">
                    Pricing
                </button>

                <button className="register-button-navabar">
                    Register Now &#8594;
                </button>
            </div>

        </div>


    )


}