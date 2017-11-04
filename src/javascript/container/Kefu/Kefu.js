import React from 'react'

import Inp from './Inp'

import Toli from './Toli'

import store from '../../../redux/store'
import action from '../../../redux/actionCreator'
import {Link,hashHistory} from 'react-router'

import axios from 'axios'

class Kefu extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="fullheight all">
                <Link to="/flower">
                <div className="back all_set">
                    <img src="http://static.iishang.com/customer/images/icons/back.png"/>
                </div>
            </Link>
                <span className="rem all_set">×</span>
                <div className="kefu">
                    
                    <div className="talk_item left">
                        <img src="http://statics.ntalker.com/setting/uploadIcon/img_pers_info/avatar_origin/kf_9412_ISME9754_T2D_liangdongxuespecialtempimage.jpg?rands=1507514159?t=1507514178000?t=1509167662000"/>
                        <div>
                            <p>爱尚鲜花-花小雪</p>  
                            <span>您好，欢迎光临，请问有什么可以帮您？</span>
                        </div>   
                    </div>
                    <div className="talk_item left">
                        <img src="http://statics.ntalker.com/setting/uploadIcon/img_pers_info/avatar_origin/kf_9412_ISME9754_T2D_liangdongxuespecialtempimage.jpg?rands=1507514159?t=1507514178000?t=1509167662000"/>
                        <div>
                            <p>爱尚鲜花-花小雪</p>  
                            <span>我是今天的值班客服小雪，很高兴为您服务。请问您需要咨询哪方面的问题？为了更好的跟踪服务效果，请在对话结束后对我的服务满意度进行评价，非常感谢您的支持。<br/>包月鲜花如需修改地址或者顺延日期、退订，需在发货日的前三个工作日在个人中心操作修改或者联系客服修改。 <br/>周六送达订单 周三上午11点前操作   <br/>周一送达订单 周五上午11点前操作 <br/>逾期将无法修改，感谢您的理解和支持！</span>
                        </div>    
                    </div>
                    <Toli ref="right"/>
                </div>
                <Inp/>
            </div>
        )
    }   
}

export default Kefu

