import React from 'react'

import axios from 'axios'

class List1 extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            lists:[]
        }
    }
    
    getFlowerData(){
    	let that = this
    	axios.get('./public/json/flower.json?limit=4').then((res)=>{
            console.log(res.data)
            that.setState({
                lists:res.data
            })
    	})
    }
    
    componentWillMount(){
    	this.getFlowerData()
    }
    getFlower(){
        return this.state.lists.map((item,i)=>{
            if(i>6&&i<=12){
                return <div className="list_content_img"  key={item.id}>
                            <div className="content-img">
                                <img src={item.img} />
                                <div className="flower_imgs">
                                    <div className="flower_title">{item.title}</div>
                                    <div className="flower_price">
                                        <span className="flower_p1">{item.price1}</span>
                                        <span className="flower_p2">{item.price2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            }
            
        })
    }    

    render(){
        return(
            
                
                <div className="list_content">
                        {
                            this.getFlower()
                        }
                </div>
           
        )
    }

    componentDidMount(){
        
    }


}

export default List1