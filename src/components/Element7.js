import React from "react";
import im1 from "../images/element7imgs/image 18.png" 
import im2 from "../images/element7imgs/image 19.png" 
import im3 from "../images/element7imgs/image 20.png" 

const categoryArrayelement7 = [
    {
        img:im1,
        description:"Creating Streamlined Safeguarding Processes with OneRen"
    },
    {
        img:im2,
        description:"What are your safeguarding responsibilities and how can you manage them?"
    },
    {
        img:im3,
        description:"Revamping the Membership Model with Triathlon Australia "
    }
]

function CategoryTemplate(props){
    return(
        <div className="Image-category-element7">
            
            <img src={props.img}  className="img-element7-styling"/>
            <div className="categroy-template-element7">
                <p className="desc-category-element7">
                    {props.description}
                </p>
                <button className="read-button-element7"> 
                    Readmore &#8594;
                </button>
            </div>
        </div>
    )
}
const cattempele7=categoryArrayelement7.map((prop)=> <CategoryTemplate {...prop}/>)


export default function Element7(){
    return(
        <div className="element7-structure">
            <div className="top-section-element7">
                
                <h2>
                Caring is the new marketing
                </h2>
                <p className="title-description-element7">
                The Nextcent blog is the best place to read about the latest membership insights, <br/> trends and more. See who's joining the community, read about how our community <br/> are increasing their membership income and lot's more.​
                </p>
            </div>
            <div className="bottom-section-element7">
                {cattempele7}
            </div>
        </div>


    )
}