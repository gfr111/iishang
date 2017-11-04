
 import React from 'react'
 
 import axios from 'axios'
 import {Link,hashHistory} from 'react-router'

 class GreenContent extends React.Component{
     constructor(props,context){
         super(props,context)
         this.state={
             list:[]
         }
     }
     
     getFlowerData(){
         let that = this;
         axios.get('http://localhost:4000/public/data/flower.json').then((res)=>{
           // console.log(res.data)
             that.setState({
                 list:res.data
             })
         })
     }
     
     componentWillMount(){
         this.getFlowerData()
     }
     getFlower(){
         return this.state.list.map((item,i)=>{
               if(i>20&&i<=25){
                 return  <div className="green-item" key={i}>
                            <Link to={"Detail/"+item.id}>
                            <img src={item.img} />
                            </Link>
                            <div className="intro">
                                <p className="intro-title">{item.title}</p>
                                <p className="intro-price">{item.price1}</p>                                
                            </div>
                        </div>     
             }  
         })
     }    
 
     render(){
         return(    
                 <div className="green_content">
                    {this.getFlower()}           
                 </div>
            
         )
     }
 
     componentDidMount(){
         
     }
 
 
 }
 
 export default GreenContent