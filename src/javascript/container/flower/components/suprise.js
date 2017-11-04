import React from "react"
import Title from "../../../common/title"
import Superisecon from "./supContent"

class Suprise extends React.Component{
    constructor(props,context){
        super(props,context)
   } 
   render(){
       return (
           <div className="sup">
                <Title contant={this.props.contant}/>
                   <Superisecon/>
           </div>
       )
   }
}
Suprise.defaultProps={
	contant:"订阅惊喜"
}

export default Suprise