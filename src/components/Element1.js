import React from "react";
import Element1Photo from "../images/Illustration.png";
import "../styles/Elements.css"


const Dots = ()=> {

    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className="dots">
            <circle cx="3.64075" cy="3.79797" r="3.48035" fill="#4CAF4F" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className="dots">
            <circle opacity="0.3" cx="4.17004" cy="3.79797" r="3.48035" fill="#4CAF4F" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className="dots">
            <circle opacity="0.3" cx="4.17004" cy="3.79797" r="3.48035" fill="#4CAF4F" />
        </svg>
        </>
    )
}




export default function Element1() {
    return (
        <div className="element1-block">
            <div className="left-part-element1">
                <h1 className="title-element1">
                    Lessons and insights
                    <span className="title-element1-date">from 8 years</span>
                </h1>
                <p className="title-element1-description">
                    Where to grow business as a photographer: site or social media &#63;
                </p>
                <button className="register-button-element1">
                    Register
                </button>
            </div>
            <img src={Element1Photo} />
            <div className="element1-threedots">
                <Dots/>
            </div>
        </div>
    );
}
