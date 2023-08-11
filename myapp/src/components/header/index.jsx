import React from "react";
import imageMain from "../../assets/images/logo.jpg"
import "./style.css"

class List extends React.Component{
    render(){
        return <li>
            <a href={this.props.url}>{this.props.name}</a>
        </li>
    }
}

class Header extends React.Component{
    state = {
        list:[
            {name: "HOME", url: "https://react.dev"},
            {name: "ABOUT US", url: "https://react.dev"},
            {name: "SERVICES", url: "https://react.dev"},
            {name: "GALLERY", url: "https://react.dev"},
            {name: "CONTACT", url: "https://react.dev"},
        ]
    }
    render(){
        return <div className="container">
         <header>
            <div className="imgcontain">
                <img className="imglogo" src={imageMain} alt="image" />
            </div>
            <ul>
                {this.state.list.map((item, index) => {
                 return <List key={index} name={item.name} url={item.url} />;
                })
                }
            </ul>
         </header>
        </div>
    }
}
export default Header