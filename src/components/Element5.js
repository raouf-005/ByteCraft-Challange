import React from "react";
import "../styles/Elements.css"
import { ReactComponent as icon1 } from "../images/icones/element5Icones/Icon (5).svg";
import { ReactComponent as icon2 } from "../images/icones/element5Icones/Icon (6).svg";
import { ReactComponent as icon3 } from "../images/icones/element5Icones/Icon (7).svg";
import { ReactComponent as icon4 } from "../images/icones/element5Icones/Icon (8).svg";

const iconArray=[
    {
        img:icon1,
        number:"2,245,341",
        description:"Members"
    },
    {
        img:icon2,
        number:"46,328",
        description:"Clubs"
    },
    {
        img:icon4,
        number:"828,867",
        description:"Event Bookings"
    },
    {
        img:icon3,
        number:"1,926,436",
        description:"Payments"
    }

]





function Element5Icon(props){

    return(
        <div className="icon-propre-structure">
            <props.img className="img-icon-element5"/>
            <div>
                <h2 className="icon-number-element5">
                    {props.number}
                </h2>
                <p className="icon-description-element5">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

const Icons= iconArray.map((prop)=><Element5Icon {...prop}  /> )

export default function Element5(){
    return (
        <div className="element5-structure">
            <div className="left-section-element5">
                <h2 className="title-color-element5">
                Helping a local<span className="title-color-secondpart">business reinvent itself</span>
                </h2>
                <p className="title-description-element5">
                We reached here with our hard work and dedication   
                </p>
            </div>
            <div className="icons-structure-display-element5">
                {Icons}
            </div>

        </div>
    )
};
