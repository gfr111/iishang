
import React from 'react'
import fetch from '../../../../fetch'
import {Link,hashHistory} from 'react-router'

class Banner extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
            banners:[]
        }
    }
    getBannerData(){
    //   axios.get("http://localhost:4000/public/data/flower.json").then((res)=>{
    //       return res.json()
    //   })
    let that=this;
     fetch.get('http://localhost:4000/public/data/flower.json').then((res)=>{
        return res.json()
}).then((data)=>{
        that.setState({
            banners:data
        })
    })

    }
    showBanner(){
        return this.state.banners.map((item,i)=>{
			if(i>=0&&i<4){
                return <div className="swiper-slide " key={i}>
                  <Link to={"Detail/"+item.id}>
                           <img src={item.img}/> 
                    </Link>
                        </div>
            }
		})
    }
    render(){
        return (
            <div className="swiper-container flower-banner">
			    <div className="swiper-wrapper banner_pic">
                      {this.showBanner()}  
			    </div>
			    <div className="swiper-pagination"></div>
			</div>
        )
    }
    componentWillMount(){
        this.getBannerData()
    }
    componentDidUpdate(){
    	this.swiper = new Swiper('.flower-banner',{
               loop:true,
               autoplay: 3000,               
               freeMode : false,
			   slidesPerView : 'auto',
			   freeModeSticky : true ,
			   freeModeMomentumRatio:0.3,
    		   pagination:'.swiper-pagination'
    	})
    }
}

export default Banner