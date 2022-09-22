import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class LogIn extends Component {
    state = { 
        sign_in:true
     }
    handleChange=()=>{
        const sign_in=!this.state.sign_in
        this.setState({sign_in})
    }  
    render() { 
        if(this.state.sign_in){
            return <SignIn handleChange={this.handleChange}/>
        }
        else{
            return <SignUp handleChange={this.handleChange}/>
        }
    }
}
 
export default LogIn;