import React from "react";
import "../styles/Footer.css"
import "../App.css"

import {ReactComponent as Footericon} from "../images/footer/Icon.svg"
import Yt from "../images/footer/yt.svg"
import Bg from "../images/footer/img1.svg"
import Tw from "../images/footer/twitter.svg"
import Sc from "../images/footer/Social Icons.svg"
import Pl from "../images/footer/planeicon.svg"

export default function Footer(){
    return(
        <div className="footer-structure">
            <div className="left-section">
                <Footericon/>
                <h3 className="left-section-title">
                    Nexcent
                </h3>
                <p>
                    Copyright © 2020 Landify UI Kit. <br/>
                    All rights reserved
                </p>
                <div className="icons-block">
                <img src={Yt}/>
                <img src={Bg}/>
                <img src={Tw}/>
                <img src={Sc}/>
                </div>
                


            </div>
            <div>
                <h3>
                Company
                </h3>
                <ul className="styling-liste">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                </ul>
                    
            </div>
            <div>
            <h3>
                Support
                </h3>
                <ul className="styling-liste">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
                </ul>
            </div>
            <div>
                <h3>
                    Stay up to date
                </h3>
                <div className="input-block">
                <input type="email" className="input-email-styling" placeholder="Your email address"/>
                <img src={Pl} className="plane-icon"/>
                </div>
                
            </div>


        </div>
    )
}