import React from "react";
import "../styles/Elements.css"

export default function Element4(props) {

    return (
        <div className="element4-container">
             <props.img className="styling-img-element4"/> 
             <div className="text-container-element4">
             <h2 className="element4-title">
            {props.title}
            </h2>
            <p className="description-element4">
            {props.description}
            </p>
            <button className="Learn-more-button">
            Learn More
            </button>  
            </div> 
        </div>
    )
}