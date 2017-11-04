import React from 'react'

class App extends React.Component{
    constructor(props,context){
         super(props,context)
    }
    render(){
        return (
           <div className="fullheight">
              {this.props.children}
           </div>
        )
    }
    // componentDidMount(){
    //     console.log(1)
    // }
}
export default App;