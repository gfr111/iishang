import React from "react"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Register extends React.Component{
    constructor(props,context){
       super(props,context)
       this.register=this.register.bind(this)
       this.state={
           value:"点击切换",    
       }
    }
    register(){
        this.props.actions.register({
            //传入接口的参数
				status:'register',
                userID:this.refs.userID.value,
                password:this.refs.password.value
       })
       console.log(this)
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
          <div className="register-content">
              <div className="register-phone">
                  <i className="iconfont icon-shouji"></i>
                  <input type="text" placeholder="账号" className="phoneNum"  ref="userID"/>
              </div>
              <div className="register-txt">
                 <i className="iconfont icon-dunpai"></i>
                 <input type="text" placeholder="图文验证码"/>
                 <span className="check" onClick={this.getCheck.bind(this)}>{this.state.value}</span>                 
              </div>
              <div className="register-check">
                 <i className="iconfont icon-dunpai"></i>
                 <input type="text" placeholder="手机验证码"/>
                 <span>获取验证码</span>
              </div>
              <div className="register-pass">
                 <i className="iconfont icon-lock"></i>
                 <input type="password" placeholder="账号密码" className="pass" ref="password"/>
                 <i className="iconfont icon-yanjing"></i>                 
              </div>
              <div className="register-btn"  onClick={this.register}>
                  <a href="#">注册 </a>
              </div>
              <div className="btn-register">
                  <a href="#">短信快捷登录 </a>
                  <a href="#" onClick={this.props.isShow}> 账号密码登录</a>
              </div>
          </div>
            </div>
        )
    }
    getCheck(){
        var str="zxcvbnhfsasygtASDFGF";
        var html="";
        for(var i=0;i<4;i++){
            html += str[Math.round(Math.random() * (str.length - 1))];
        }
        this.setState({
            value:html
        })
    }
}

// export default Register
import actionCreator from '../../../../redux/actionCreator'
export default connect((state)=>{
     return  state;
},(dispatch)=>{
	return {
		actions:bindActionCreators(actionCreator,dispatch)
	}
})(Register)