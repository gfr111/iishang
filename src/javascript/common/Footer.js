
import React from 'react'

import {Link,hashHistory} from 'react-router'

class Footer extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        let {active} = this.props
       // console.log(this.props.active)
        return (
            <div className="ele-nav">
                <Link to="/flower" className={active=='shouye'?'active':''}>
                    <i className="iconfont icon-shouye"></i>
                    首页
                </Link>
                <Link to="/Kefu" className={active=='kefu'?'active':''}>
                    <i className="iconfont icon-kefu"></i>
                   客服
                </Link>
                <Link to="Car" className={active=='car'?'active':''}>
                    <i className="iconfont icon-cart-copy"></i>
                    购物车
                </Link>
                <Link  to="/Mine" className={active=='home'?'active':''}>
                    <i className="iconfont icon-home"></i>
                    我的
                </Link>
            </div>
           
        )
    }
}
Footer.defaultProps={
	active:'shouye'
}

export default Footer