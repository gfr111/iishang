
const _state={
	message:{
        userID:"",
        password:""
    },
    todos:[]
}
const reducer = (state=_state,action)=>{
	switch(action.type){     
        case 'GET_USER':
			let newstate = Object.assign({},state)
            newstate.message = action.message
             let value=newstate.message.userID
            // console.log(value)
           //localStorage.setItem("userID",value)
            return newstate;break;	
        case "ADD_ITEM":
            state.todos.push({
                todos:action.todos
            })
            return state;break;
		default :
			return state;break;
    }

}

export default reducer