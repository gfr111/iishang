import Login from "./login"
import Register from "./register"
import React from "react"
import Footer from "../../../common/Footer"


class All extends React.Component{
    constructor(props,context){
       super(props,context)
       this.changeLogin=this.changeLogin.bind(this)
       this.changePage=this.changePage.bind(this)
       this.state={
           isShow:true,
       }
    }
    changePage(){
        this.setState({
            isShow:false
        })
     }
     changeLogin(){
        this.setState({
            isShow:true
        })
     } 
    render(){
        return (
            <div className="fullheight mine">        
               
                  {
                     this.state.isShow?<Login isShow={this.changePage.bind(this)}/>:<Register isShow={this.changeLogin.bind(this)}/>
                 }             
                 
            </div>
        )
    }
}


export default All