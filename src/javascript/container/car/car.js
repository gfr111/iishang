import React from "react"

import Footer from "../../common/Footer"

class Car extends React.Component{
    constructor(props,context){
       super(props,context)
    }
    render(){
        const user=this.props
        return (
            <div className="fullheight car">        
                <div>
                    car   kkdfkd
                </div>
               
                 <Footer active={"home"}/>
            </div>
        )
    }
}

export default Car
