import React, {Component} from 'react';

class login extends Component{
    render(){
        return(
            <div>
                 <h1>State is : {this.props.todos}</h1>
                <button onClick={()=> this.props.addData()}>Click Me !</button>
            </div>
        )
    }

}

export default login;