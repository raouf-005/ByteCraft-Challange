import React from "react";
import "../styles/Elements.css";
import { ReactComponent as Icon1 } from "../images/icones/element5Icones/Icon (5).svg";
import { ReactComponent as Icon2 } from "../images/icones/element5Icones/Icon (6).svg";
import { ReactComponent as Icon3 } from "../images/icones/element5Icones/Icon (7).svg";
import { ReactComponent as Icon4 } from "../images/icones/element5Icones/Icon (8).svg";

const iconArray = [
  {
    Icon: Icon1,
    number: "2,245,341",
    description: "Members",
  },
  {
    Icon: Icon2,
    number: "46,328",
    description: "Clubs",
  },
  {
    Icon: Icon4,
    number: "828,867",
    description: "Event Bookings",
  },
  {
    Icon: Icon3,
    number: "1,926,436",
    description: "Payments",
  },
];

function Element5Icon({ Icon, number, description }) {
  return (
    <div className="icon-propre-structure">
      <Icon className="img-icon-element5" />
      <div>
        <h2 className="icon-number-element5">{number}</h2>
        <p className="icon-description-element5">{description}</p>
      </div>
    </div>
  );
}

function Element5() {
  return (
    <div className="element5-structure">
      <div className="left-section-element5">
        <h2 className="title-color-element5">
          Helping a local<span className="title-color-secondpart">business reinvent itself</span>
        </h2>
        <p className="title-description-element5">We reached here with our hard work and dedication</p>
      </div>
      <div className="icons-structure-display-element5">
        {iconArray.map((icon, index) => (
          <Element5Icon key={index} {...icon} />
        ))}
      </div>
    </div>
  );
}

export default Element5;
