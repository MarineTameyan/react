import React from "react";
import img from "../../assets/images/office.jpg"
import './style.css'
class Content extends React.Component{
    render(){
        return <div className="fourthcontain">
            <div className="content">
                <img src={img} alt="image"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta laudantium voluptatibus. Ipsam qui illum, enim ea eveniet distinctio animi et ab voluptates est debitis quos tempore aliquid, repellendus sed.</p>
            </div>
        </div>
    }
}
export default Content