import React from 'react'


class KefuItem extends React.Component{
    constructor(props,context){
        super(props,context) 
    }
    componentDidMount(){
       // console.log(this.props)
    }
  render(){
       let {todos} = this.props.todos
       console.log({todos})
        return(
            <div className="right clearfix">
                <img src="http://hsetting30.ntalker.com/application/static/setting/images/head.jpg"/>    
                <div> 
                    <span className="kefu_span">{todos}</span>
                </div>
            </div>
        )
    }
    componentDidMount(spankefu){
      // console.log(this.getSpan(spankefu).innerHTML)
      this.getSpan(spankefu).scrollIntoView()
       
    }
    getSpan(){
        var spankefu = document.getElementsByClassName("kefu_span")[0]
        return spankefu;
    }

}

export default KefuItem