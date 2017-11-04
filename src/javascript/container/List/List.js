import React from 'react'

import axios from 'axios'
import {Link,hashHistory} from 'react-router'


class List extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            lists:[]
        }
    }
    
    getFlowerData(){
    	let that = this
    	axios.get('http://localhost:4000/public/data/flower.json').then((res)=>{
            //console.log(res.data)
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
            if(i>12&&i<=17){
                return <div className="list_content_img"  key={item.id}>
                            <div className="content-img">
                             <Link to={"Detail/"+item.id}>
                                <img src={item.img} />
                                </Link>
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
            <div className="flower_list fullheight">
                <div className="list_header">
                    <Link to="/flower"><img className="header_img" src="./public/images/back.png"/></Link>
                    <span >订阅惊喜</span>
                    <p> &nbsp;</p>
                </div>
                <div className="list_content">
                    <img className="list_content_header" src="./public/images/header.jpg"/>
                        {
                            this.getFlower()
                        }
                </div>
                <div className="list_footer">
                    <span></span>
                    <p>已经到底啦~</p>
                    <span></span>
                </div>
            </div>
        )
    }

    componentDidMount(){
        
    }


}

export default List