import React, { Component } from 'react'
import Marks from './Marks';

export default class Student extends Component {
    constructor(){
        super();
        this.state={
            roll:101
        }
        
    }
    clickHandle = ()=>{
        console.log("button click");
        // this.setState({roll:102})
        this.setState({roll:this.state.roll+1})
    }
    render() {
        return (
            <div>
               <Marks roll={this.state.roll}/> 
               <button onClick={this.clickHandle}>change</button>
            </div>
        )
    }
}
