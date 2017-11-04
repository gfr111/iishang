import React from "react";

class Header extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            isShow:true
        }
    }
    showHeader(type){
        this.setState({
            isShow:type
        })
    }
    render(){
        return (
            <div>
                 {
                    this.state.isShow?<div className="top">
                                    <img src="http://static.iishang.com/customer/images/v2/logo.png" className="pic_header"/>
                                </div>:''
                } 
            </div>
            
        )
    }
    

}
export default Header