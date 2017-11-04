import React from "react"
class Title extends React.Component{
    constructor(props,context){
        super(props,context)
   }
   render(){
       return (
           <div className="flower-title">
               <div className="ico">
                    <div></div>
               </div>
               <div className="title-txt">
                   {this.props.contant}
               </div>
               <i className="iconfont icon-qianjin1"></i>
           </div>
       )
   }
}
export default Title