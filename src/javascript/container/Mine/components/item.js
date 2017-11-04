import React from 'react'

class Item extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="all_list_head">
                <div className="list_l">
                    <img src={this.props.url}/>
                    <span>{this.props.text}</span>
                </div>
                <img className="list_r" src="http://static.iishang.com/customer/images/icons/back.png"/>
            </div> 
        )
    }
}

export default Item