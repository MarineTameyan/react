import React from "react";
import Header from "./components/header";
import './App.css'
import Slider from "./components/imagetext";
import Text from "./components/texts";
import Content from "./components/main";
import Imagecontent from "./components/content";
import Footer from "./components/footer";
class App extends React.Component{
  render(){
    return <>
    <Header/>
    <Slider/>
    <Text/>
    <Content/>
    <Imagecontent/>
    <Footer/>
    </>
  }
}
export default App