import React from "react";
import "../styles/Elements.css"
import { Categoryarray } from "./Categoryarray";
import CategoryThemplate from "./Categoryarray"

const category =Categoryarray.map((element,index)=>{
    return (
        <CategoryThemplate {...element} key={index}/>
    )
})




export default function Element3(){
    return (
      <div className="element3-block">
        <h2>Manage your entire community <br/> in a single system</h2>
        <p className="title-description">
            Who is Nextcent suitable for?
        </p>
        <div className="categoryTemplate-element3" >
            {category}
        </div>
      </div>  
    )
}
