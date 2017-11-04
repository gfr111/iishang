import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Login extends React.Component{
    constructor(props,context){
       super(props,context)
       this.getuser=this.getuser.bind(this)
       this.setUser=this.setUser.bind(this)
       this.state={
           userID:""
       }
    }
    setUser(){
        console.log(1)
    }
    render(){
        return (
            <div>
                <div className="mine-header">
                    <div className="mine_pic">
                      <img src="http://m.iishang.com/resources/assets/images/logo_new.png"/>
                    </div>
                   <div className="logo_text">让喜欢成为习惯&nbsp;&nbsp;爱尚<sup>®</sup>订阅鲜花</div>
               </div>
            <div className="login-content">
                <div className="login-phone">
                    <i className="iconfont icon-shouji"></i>
                    <input type="text" placeholder="账号" className="phone" ref="userID"/>
                </div>
                <div className="login-pass">
                    <i className="iconfont icon-lock"></i>
                    <input type="password" placeholder="账号密码" className="pass" ref="password"/>
                    <i className="iconfont icon-yanjing" ></i>                 
                </div>
                <div className="login-btn">
                    <a href="#" onClick={this.getuser} ref="login">登录</a>
                    <a href="#" onClick={this.props.isShow}> 注册</a>
                </div>
                <div className="btn">
                    <a href="#">短信快捷登录 </a>
                    <a href="#"> 重置密码</a>
                </div>
            </div>
         </div>
        )
    }
    getuser(){
     // console.log(this.refs.userID.value,this.refs.password.value)
       this.props.actions.getUser({
            //传入接口的参数
				status:'login',
                userID:this.refs.userID.value,
                password:this.refs.password.value
       })
    //    ,function(){
    //        browserHistory.push("./flower")
    //    })

       
    }
}

// export default Login
import actionCreator from '../../../../redux/actionCreator'
export default connect((state)=>{
     return  state;
},(dispatch)=>{
	return {
		actions:bindActionCreators(actionCreator,dispatch)
	}
})(Login)