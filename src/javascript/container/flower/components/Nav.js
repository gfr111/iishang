
import React from 'react'
import {Link,hashHistory} from 'react-router'

class Nav extends React.Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
           <div className="bg">
                <div className="flower-nav">
                <Link to="/List">
                    <img src="http://resource.iishang.com/home/category/c4a0dc71-2e7a-4877-a2f1-7719acebc244.gif"/>
                    订阅惊喜
                </Link>
                <Link to="/List">
                   <img src="http://resource.iishang.com/home/category/1556cd26-ac68-4be9-aa44-e1e26812e29f.gif"/> 
                   急速送花
                   </Link>
                <Link to="/List">
                  <img src="http://resource.iishang.com/home/category/0378dbef-66ca-4deb-878f-d25219b93775.gif"/>
                    绿植盆栽
                    </Link>
                <Link to="/List">
                  <img src="http://resource.iishang.com/home/category/838e8f10-f271-44db-8f05-47a5dfab6f68.gif"/>
                    花边小物
                 </Link>
            </div>
           </div>
           
        )
    }
}

export default Nav