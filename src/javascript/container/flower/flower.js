import React from "react"
import Header from "./components/Header"
import Banner from "./components/banner"
import Nav from "./components/Nav"
import TimeLimit from "./components/TimeLimit"
import Footer from "../../common/Footer"
import Suprise from "./components/suprise"
import Green from "./components/green"
import Bottom from "./components/bottom"


class Flower extends React.Component{
   constructor(props,context){
        super(props,context)
   }
   render(){
       return (
          <div className="fullheight flower">
             <div ref="flower-content" className="flower-content">
                <Header ref="flower-header"/>
                <Banner/>
                <Nav/>
                <TimeLimit/>
                <Suprise/>
                <Green/>
                <Bottom/>
             </div>
             <Footer/>
          </div>
       )
   }
   componentDidMount(){
    let that = this
    this.refs['flower-content'].addEventListener("scroll",(e)=>{
       
        if(e.target.scrollTop>10){
            that.refs['flower-header'].showHeader(false)
        }else{
            that.refs['flower-header'].showHeader(true)
        }
    })
   }
}
export default Flower;