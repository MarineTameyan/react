import React from "react";
import imageone from "../../assets/images/thumb-01.jpg"
import imagetwo from "../../assets/images/thumb-02.jpg"
import imagethree from "../../assets/images/thumb-03.jpg"
import imagefour from "../../assets/images/thumb-04.jpg"
import "./style.css"


class Imagecontent extends React.Component{
    render(){
        return <div className="fifthcontainer">
            <div className="headtext">
                <p>TOP REFERENCES</p>
            </div>
            <div className="imgs">
                <img src={imageone} alt="image"/>
                <img src={imagetwo} alt="image"/>
                <img src={imagethree} alt="image"/>
                <img src={imagefour} alt="image"/>
            </div>
        </div>
    }
}
export default Imagecontent
