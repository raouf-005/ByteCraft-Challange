import icone1 from "../images/icones/Logo (1).png"
import icone2 from "../images/icones/Logo (2).png"
import icone3 from "../images/icones/Logo (3).png"
import icone4 from "../images/icones/Logo (4).png"
import icone5 from "../images/icones/Logo (5).png"
import icone6 from "../images/icones/Logo (6).png"
const arrayicones= [icone6,icone1,icone2,icone3,icone4,icone5,icone2]

export const Showicons =arrayicones.map((icone ,index)=>{
    return (
        <img src={icone} className="icones" key={index}/>
    )
})

