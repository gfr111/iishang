
import axios from 'axios'
import store from "./store"
const actionCreator = {
	getUser(params){
		return (dispatch)=>{
            axios.get("http://datainfo.duapp.com/shopdata/userinfo.php",{
                params:params
            }).then((res)=>{
                //console.log(res)
                if(res.data.userID){
                  dispatch({
                        type:'GET_USER',
                        message:{
                            userID:res.data.userID,
                            password:res.data.password
                        }
                    })
                    alert("登录成功")
                }else{
                    alert('登录失败')
                }           
            })
        }
    },
    register(params){
		return (dispatch)=>{
            axios.get('http://datainfo.duapp.com/shopdata/userinfo.php', {
                    params:params
            }).then((res)=>{
                console.log(res)
                if(res.data==1){
                    alert("注册成功，快去登录吧")
                }else if(res.data==0){
                    alert('用户名重复')
                }else{
                    alert("注册失败")
                }         
            })
        }
    },
    add(new_title){
        store.dispatch({
            type:"ADD_ITEM",
            todos:new_title
        })
    }
}


export default actionCreator