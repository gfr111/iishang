import React from "react"

class Bottom extends React.Component{
    constructor(props,context){
        super(props,context)
   } 
   render(){
       return (
           <div className="bottom">
                <img src="http://static.iishang.com/customer/images/icons/logo_gray.png"/>
                <div className="intro">
                    <p> 上海爱尚鲜花股份有限公司 版权所有</p>
                    <span> 400-6000720</span>
                </div>
           </div>
       )
   }
}


export default Bottom