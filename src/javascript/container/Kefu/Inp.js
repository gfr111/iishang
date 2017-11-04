import React from 'react'
import actions from '../../../redux/actionCreator'
import KefuItem from './KefuItem'



class Inp extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    add(e){
       
        if(e.keyCode==13){
            let new_title = e.target.value
            actions.add(new_title)
        }
        
       
    }
    render(){
        return(
            <div className="kefu_foot">
                <input onKeyUp={this.add.bind(this)} className="val" placeholder="我想说..." />
            </div>
        )
    }
    
}


export default Inp