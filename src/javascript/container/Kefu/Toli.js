

import React from 'react' 

import store from '../../../redux/store'

import KefuItem from './KefuItem'


class Toli extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            todos:store.getState().todos
        }
    }
    render(){
        let {todos} = this.state
        console.log(this.state)
        return(
            <div>
               {
                   todos.map(function(todos,i){
                       return <KefuItem  todos={todos} key={i}/>
                   })
               }
            </div>
        )
        
    }
    componentDidMount(){
        store.subscribe(function(){
            this.setState({todos:store.getState().todos})
        }.bind(this))
    }

    get(){
         document.getElementsByClassName("right")[0].scrollIntoView()
       
    }
}



export default Toli