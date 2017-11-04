import React from "react"
import Title from "../../../common/title"
import LimitContent from "./LimitContent"
import {Link,hashHistory} from 'react-router'


class Time extends React.Component{
    constructor(props,context){
        super(props,context)
   } 
   render(){
       return (
           <div className="time-limit">
                <Title contant={this.props.contant}/>
                <Link to="/Detail">
                    <LimitContent/>
                </Link>
           </div>
       )
   }
}
Time.defaultProps={
	contant:"限时抢购"
}

export default Time