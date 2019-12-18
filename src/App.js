import React, { Component } from 'react'
import Student from './Student'
export default class App extends Component {
    constructor(props){
        super(props);
        console.log("App constructor called");
        console.log(props)
        this.state={
            roll:"191"
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log("App getderived state from props");
        console.log(props, state);
        return null;
    }
    render() {
        console.log("App rendered")
        return (
            <div>
              <Student name="saurav" />
            </div>
        )
    }
}
