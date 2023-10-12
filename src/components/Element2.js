import React from "react";
import "../styles/Elements.css"
import {Showicons} from "./Iconearray";
export default function Element2(){
    return (
      <div className="element2-block">
        <h2>Our Clients</h2>
        <p className="title-description">We have been wroking with some Fortune 500+ clients</p>
        <div className="Clients-liste-element2">
          {Showicons} 
        </div>
      </div>  
    )
}
