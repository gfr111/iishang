
require("./style/app.scss")
const React = require('react')
const ReactDOM = require('react-dom')
import App from "./javascript/App"
import flower from "./javascript/container/flower/flower"
import List from "./javascript/container/List/List"
import Mine from "./javascript/container/Mine/mine"
import Login from "./javascript/container/Mine/components/login"
import User from "./javascript/container/Mine/components/user"
import Car from "./javascript/container/car/car"
import Detail from "./javascript/container/Detail/detail"
import Kefu from "./javascript/container/Kefu/Kefu"


import { Router , Route , hashHistory,browserHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router'

import store from './redux/store'
import {Provider} from 'react-redux'
ReactDOM.render(
	<Provider store={store}>
	 <Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRedirect to='/flower'/>
			<Route path="/flower" component={flower}></Route>
			<Route path="/List" component={List}></Route>
			<Route path="/Mine" component={Mine}></Route>																	
			<Route path="/Login" component={Login}></Route>																	
			<Route path="/User" component={User}></Route>	
			<Route path="/Car" component={Car}></Route>														
			<Route path="/Detail/:id" component={Detail}></Route>
			<Route path="/Kefu" component={Kefu}></Route>														
																	
																
			<Redirect from='*' to="/flower"/>
		</Route>
	 </Router>
	</Provider>
	,document.getElementById("app"))

