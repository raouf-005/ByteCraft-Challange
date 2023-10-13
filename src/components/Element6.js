import React from "react";
import image from "../images/image 9.png"
import {Showicons} from "./Iconearray";

/* this code is for deleting an icon */
const sixIconcode = Showicons.slice(0, 6);





export default function Element6(){
    return(
        <div className="element6-structure">
            <img src={image} className="img-element6"/>
            <div className="right-part-structure-element6">
                <p className="description-element6">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h3 className="author-element6">
                Tim Smith 
                </h3>
                <p className="association-element6">
                British Dragon Boat Racing Association
                </p>
                <div className="icones-template-element6">
                    {sixIconcode}
                    <button className="button-styling-element6">
                    Meet all customers &#8594;
                    </button>
                </div>
            </div>

        </div>
    )
}