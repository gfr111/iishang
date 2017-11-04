import React from 'react'

import Item from './item'

class User extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    exit(){
        // localStorage.removeItem("userID")
        // alert("您已退出登录")
    }
    render(){
        return(
            <div className="fullheight user">
                <div className="userHeight">
                    <div className="user_header">
                        <div className="header_mes">
                            <div className="header_mes_l">
                                    <img className="header_l" src="http://flower2.oss-cn-hangzhou.aliyuncs.com/customer/images/v2/icons/default_avatar.png"/>
                                    <div className="header_c">
                                        <span className="name">{this.props.name}</span>
                                        <p><span>经验值0</span><span>积分0</span></p>
                                    </div>
                                </div>
                            <img className="header_r" src="http://static.iishang.com/customer/images/icons/back.png"/>
                        </div>
                        <div className="header_list">
                            <p>
                                <span>0</span>
                                <span>优惠券</span>
                            </p>
                            <p>
                                    <span>0</span>
                                    <span>邀请码</span>
                            </p>
                            <p>
                                <span>0</span>
                                <span>兑换码</span>
                            </p>
                        </div>
                    </div>
                    <div className="all_list">
                        <div className="all_list_head">
                            <div className="list_l">
                                <img src="http://static.iishang.com/customer/images/icons/allOrder.png"/>
                                <span>全部订单</span>
                            </div>
                            <img className="list_r" src="http://static.iishang.com/customer/images/icons/back.png"/>
                        </div>
                        <div className="list_img">
                            <p>
                                <img src="http://static.iishang.com/customer/images/icons/waitForPay.png"/>
                                待付款
                            </p>
                            <p>
                                <img src="http://static.iishang.com/customer/images/icons/toBeGroup.png"/>
                                待成团
                            </p>
                            <p>
                                <img src="http://static.iishang.com/customer/images/icons/toBeDe.png"/>
                                待服务
                            </p>
                            <p>
                                <img src="http://static.iishang.com/customer/images/icons/inService.png"/>
                                服务中
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <Item url={"http://static.iishang.com/customer/images/icons/address.png"} text={"收货地址"}/>
                        <Item url={"http://static.iishang.com/customer/images/icons/card.png"} text={"贺卡查询"}/>
                        <Item url={"http://static.iishang.com/customer/images/icons/payRecord.png"} text={"消费记录"}/>
                        <Item url={"http://static.iishang.com/customer/images/icons/aboutUs.png"} text={"关于我们"}/>
                    </div>
                    <div className="item">
                        <Item url={"http://static.iishang.com/customer/images/icons/shequ.png"} text={"我的社区"}/>
                    </div>
                    <div className="item"  onClick={this.exit}>
                        <Item url={"http://static.iishang.com/customer/images/icons/logout.png"} text={"退出登录"}/>
                    </div>
                </div>
            </div>
        )
    }


}


export default User