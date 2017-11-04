
 import React from 'react'
 
 import axios from 'axios'
 
 import {Link,hashHistory} from 'react-router'
 
 class SupContent extends React.Component{
     constructor(props,context){
         super(props,context)
         this.state={
             lists:[]
         }
     }
     
     getFlowerData(){
         let that = this
         axios.get('http://localhost:4000/public/data/flower.json').then((res)=>{
            // console.log(res.data)
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
             if(i>6&&i<12){
                 return <div className="list_content_img"  key={item.id}>
                     <Link to={"Detail/"+item.id}>
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
                             </Link>
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
 
 export default SupContent