import React from "react";
import logoone from "../../assets/images/fblogo.png"
import logotwo from "../../assets/images/linkedin.png"
import logothree from "../../assets/images/twitter.png"
import logofour from "../../assets/images/youtube.png"
import "./style.css"

class Footer extends React.Component{
    render(){
        return <div className="sixthcontain">
            <div className="footer">
            <div className="vernagir">
                <p className="h-one">LET'S KEEP IN TOUCH</p>
                <p className="h-two">Deleniti pertinacia eu est, te his soluta quaestio pericula illum vulputate lobortis facilisis.</p>
            </div>
            <div className="pictures">
                <img src={logoone} alt="image"/>
                <img src={logotwo} alt="image"/>
                <img src={logothree} alt="image"/>
                <img src={logofour} alt="image"/>
            </div>
            </div>
        </div>
    }
}
export default Footer