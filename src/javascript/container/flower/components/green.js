import React from "react"
import Title from "../../../common/title"
import GreenContent from "./greenContent"

class Green extends React.Component{
    constructor(props,context){
        super(props,context)
   } 
   render(){
       return (
           <div className="green">
                <Title contant={this.props.contant}/>
                    <GreenContent/>
           </div>
       )
   }
}
Green.defaultProps={
	contant:"花边小物"
}

export default Green