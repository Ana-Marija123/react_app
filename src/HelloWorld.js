import React, { Component } from 'react';

class HelloWorld extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>Hello {this.props.fullName}</div>
        )
    }
}
export default HelloWorld;