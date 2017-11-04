import React from 'react'
import axios from "axios"

import {Link,hashHistory} from 'react-router'

class Detail extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            title:"",
            price1:"",
            price2:"",
            img:""
        }
    }
    getDetails(){
      let that=this
      axios.get("http://localhost:4000/public/data/flower.json")
      .then((res)=>{
          for(var i=0;i<res.data.length;i++){
              if(this.props.params.id==res.data[i].id){
                  console.log(typeof(res.data[i].img))
                  that.setState({
                      title:res.data[i].title,
                      price1:res.data[i].price1,
                      price2:res.data[i].price2,
                      img:res.data[i].img
                      
                  })
              }
          }
         
      })
    }
    componentWillMount(){
        console.log(this.state)
        this.getDetails()
    }
    render(){
       // let {img}=JSON.stringify(this.state.img)
       // console.log(typeof(this.state.img))
        return(
            <div className="detail-all fullheight">
                <div className="detail fullheight">
                    <div className="detail_header">
                        <Link to="/flower">
                        <img className="header_img"   src="http://static.iishang.com/customer/images/icons/back.png"/>
                        </Link>
                        <span >商品详情</span>
                       <Link to="/User">
                         <i className="iconfont icon-home"></i>
                       </Link>
                    </div>
                    <div className="detail_content">
                         <div className="detailPic">
                             <img src={this.state.img} />
                          </div>
                        <div className="detail_mes">
                            <h3>{this.state.title}</h3>
                            <p className="p1">四种套餐的惊喜选择 让芬芳飘洒</p>
                            <p className="p2"><span>￥</span>{this.state.price1}~<span>￥</span>{this.state.price2}<span>00</span></p>
                            <p className="p3">运费：免运费</p>
                            <div className="flower_dec">
                                <p>周期性</p>
                                <span>该商品为订阅包月鲜花，每1周配送一次</span>
                            </div>
                            <div className="item1">
                                <span>款式</span>
                                <p>花漾盛宴A</p>
                                <p>花漾盛宴B</p>
                            </div>
                            <div className="item2">
                                <span>时长</span>
                                <p>花漾盛宴A</p>
                                <p></p>
                            </div>
                            <div className="item3">
                                <span>数量</span>
                                <p>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </p>
                                <p></p>
                            </div>
                        </div>
                        <div className="details_imgs">
                            <div className="details-title">商品详情
                                <p></p>
                            </div>
                            <img src="http://resource.iishang.com/product/20171031/48b02b7e-13ed-4d9a-a12c-772b58a174a9.jpg"/>
                            <img src="http://resource.iishang.com/product/20171031/9e674c17-e3bc-43d6-ad57-3f13068028ab.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/2b57a993-7898-4b9c-8f2c-34092d889864.jpg"/>
                            <img src="http://resource.iishang.com/product/20170905/12683685-1b86-46aa-8682-13aea4185457.jpg"/>
                            <img src="http://resource.iishang.com/product/20170905/d4141621-e9e6-45b2-ac3d-c8f941ecd62b.gif"/>
                            <img src="http://resource.iishang.com/product/20170904/c61e4fb3-545f-4954-9f02-cdfc46d8b0d3.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/35c4c18c-47fc-4d04-a5ab-7368d47e145e.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/72aff206-f45b-4368-85d3-6347d7a99f62.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/50e56c64-5556-4962-a176-18c93c9d2af6.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/a8fa2247-abae-4032-91d2-800e225d55fd.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/98f0a570-b286-469e-b26b-6f32201d778e.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/cff43fb1-7aa8-4bbe-ad7e-71bb9de797a4.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/d5f145da-7e25-4d97-b4d6-4b2432a87321.jpg"/>
                            <img src="http://resource.iishang.com/product/20170905/4ef01101-2090-44a2-b1b8-2ba59861e9c7.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/b630e51e-14f4-4875-9aa4-8d2da3e41dbe.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/f68270b1-d055-48dc-b9e2-014731723247.gif"/>
                            <img src="http://resource.iishang.com/product/20170904/63125f57-7de3-4cd4-8038-144c4f4b19b6.jpg"/>
                            <img src="http://resource.iishang.com/product/20170904/934f0ee2-bf5a-4792-b9e7-a8284e8d13a8.jpg"/>
                        </div>
                        <div style={{height:"100px"}}></div>

                    </div>
                </div>


                <div className="detail_footer">
                    <div className="ico">
                        <Link to="/flower">
                         <i className="iconfont icon-shouye"></i>
                        首页
                        </Link>
                    </div>
                    <div className="ico">
                        <Link to="/kefu">
                        <i className="iconfont icon-kefu"></i>
                        客服
                        </Link>
                    </div>
                    <div className="ico">
                        <Link to="car">
                        <i className="iconfont icon-cart-copy"></i>
                        购物车
                        </Link>
                    </div>
                    <div className="add-cart">
                        加入购物车
                    </div>
                    <div className="buy-flower">
                        立即购买
                    </div>

                </div>
            </div>
        )
    }
}

export default Detail