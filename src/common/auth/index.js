import React,{Component} from 'react';
import {Redirect,Route} from 'react-router-dom'
import Login from '../../pages/login';

// import tokenData from '../../http/api'

class Auth extends Component{
    constructor() {
        super();
        this.state = {
            tokenType: true //成功
        }
    }

    componentDidMount() {
        if (localStorage['token']) {
            this.setState({
                tokenType: true
            })
        } else {
            this.setState({
                tokenType: false
            })
        }
    }
    render(){
        const {tokenType}=this.state
        const {pathname} = this.props.location
        const {config} =this.props
        const nowRoute = config.find((v)=>v.path===pathname)
        if(tokenType){
            return <Route path={pathname} component={nowRoute.component} /> //component={Center}
        }else{
            return <Redirect to={'/login'} component={Login}/>
        }
        
    }
}

export default Auth;