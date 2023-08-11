import React from "react";
import imgSlide from "../../assets/images/webhero.jpg"
import './style.css'
class Slider extends React.Component{
    render(){
        return <div className="contain">
            <div className="imgslide">
                <img src={imgSlide} alt="image" />
            </div>
            <div className="par">
                <p>WE ARE WEB DESIGN HEROES</p>
            </div>
        </div>
    }
}

export default Slider
