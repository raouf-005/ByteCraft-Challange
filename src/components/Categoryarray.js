import "../styles/Elements.css"
import {ReactComponent as Associtions} from "../images/icones/element3Icon/Icon (9).svg"
import {ReactComponent as Membership} from "../images/icones/element3Icon/Icon (10).svg"
import {ReactComponent as Clubs} from "../images/icones/element3Icon/Icon (11).svg"

export const Categoryarray=[
    {
        title:"Membership Organisations",
        description:`Our membership management software
         provides full automation of
          membership renewals and payments
        `,img:Membership
    },
    {
        title:"National Associations",
        description:`Our membership management software provides
         full automation of membership renewals and  payments
        `,img:Associtions
    },
    {
        title:"Clubs And Groups",
        description:`Our membership management software provides full 
        automation of membership renewals and payments
        `,img:Clubs
    }
    
]


export default function CategoryThemplate(props){
    return(
        <div className="elements-template">
            <div className="img-container-element3">
                <props.img className="img-styling-element3"/>
                <div className="img-absolute-green">    
                </div>
            </div>

        <h2 className="title-element3-category">
            {props.title}
        </h2>
        <p className="title-description-element3">
           {props.description}
        </p>
    </div>
    )
}

