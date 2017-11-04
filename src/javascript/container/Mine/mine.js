import React from "react"

import Footer from "../../common/Footer"
import User from "./components/User"
import All from "./components/all"
import store from "../../../redux/store"

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Mine extends React.Component{
    constructor(props,context){
       super(props,context)
       //let userID=this.props.message
    //    this.state={       
    //        userInfo:this.props.message
    //    }
    }
    render(){
        const user=this.props
        return (
            <div className="fullheight mine">        
                {
                    user.message.userID?<User name={this.props.message.userID}/>:<All/>
                }
                 <Footer active={"home"}/>

            </div>
        )
    }
//     componentDidMount(){
//         console.log(this.props.message.userID)
//    }
//     componentDidUpdate(){
//         console.log(this.props.message.userID)
//    }
}

import actionCreator from '../../../redux/actionCreator'
export default connect(state=>state,(dispatch)=>{
	return {
		actions:bindActionCreators(actionCreator,dispatch)
	}
})(Mine)