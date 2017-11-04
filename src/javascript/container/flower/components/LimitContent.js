import React from "react"

class LimitContent extends React.Component{
    constructor(props,context){
        super(props,context)
   }
   render(){
       return (
          <div className="limit-content">             
             <div className="limit-item">
                 <div className="pic-item">
                     <img src="./public/images/3.jpg"/>
                 </div>
                <div className="txt-item">
                     <p className="info-item">单混双悦</p>
                     <p className="price-item">
                         <span className="pic">￥129.00</span>
                        <s>￥169.00</s>
                      </p>                    
                 </div>
             </div>                     
             <div className="limit-item">
                 <div className="pic-item">
                     <img src="./public/images/4.jpg"/>
                 </div>
                 <div className="txt-item">
                     <p className="info-item">花漾盛宴</p>
                     <p className="price-item">
                         <span>￥189.00</span>
                        <s>￥306.00</s>
                      </p>                    
                 </div>
              </div>
             
          </div>
       )
   }
}
export default LimitContent