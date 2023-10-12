import "../styles/Elements.css"
import Associtions from "../images/icones/Associations.jpg"
import Membership from "../images/icones/Membrship.jpg"
import Clubs from "../images/icones/Clubs.jpg"

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
         full automation of membership renewals and payments
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
            <img src={props.img} className="elements-template-img"/>
            <div className="img-absolute-green">
                
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

