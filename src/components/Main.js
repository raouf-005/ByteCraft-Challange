import React from "react";
import Element1 from "./Element1";
import Element2 from "./Element2";
import Element3 from "./Element3";
import Element4  from "./Element4";
import Element5 from "./Element5";
import Element6 from "./Element6";
import Element7 from "./Element7";
import Element8 from "./Element8";
import "../App.css"
import { ReactComponent as Imgelement4 } from "../images/Frame 35.svg";
import { ReactComponent as Imgelement6 } from "../images/pana.svg";


const element4data={
  img:Imgelement4
  ,title:"The unseen of spending three years at Pixelgrade"
,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
}

const element6data={
  img:Imgelement6
  ,title:"How to design your site footer like we did"
,description:"Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
}
export default function Main()
{
    return(
        <div className="Main">
          <Element1 /> 
          <Element2/>
          <Element3 /> 
          <Element4 {...element4data} />
          <Element5/>
          <Element4 {...element6data} />
          <Element6 />
          <Element7 />
          <Element8 />
        </div>
          
    )

}