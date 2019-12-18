// import React, { Component } from 'react'

// class Student extends Component{
    
//         state ={
//             id:1,
//             name:"rahul"
           
//         }
//         // this.handleClick = this.handleClick.bind(this);
    
//     handleClick=(id,e)=>{
       
//         console.log(id);
//         console.log(e);
     
//         // console.log("button clicked",this);
//     }
  
//     render(){
//         return (
//             <div>
//                 <h1>hello {this.state.name} </h1>
//                 <button onClick={
//                 this.handleClick.bind(this,this.state.id)}>delete</button>
//             </div>
//         )
//     }
// }
// export default Student;
// function Student(props){
//     function handleClick(e){
//         e.preventDefault();
//         console.log("button clicked");
//     }
//     return(
//         <div>
//             <h1>hello {props.name}</h1>
//             <a href="http://www.google.com"onClick ={handleClick}>click me</a>
//         </div>
//     )
// }
// export default Student;
// import React, { Component } from 'react'

// export default class Student extends Component {
//     constructor(props){
//         super(props);
//         console.log("App constructor called");
//         console.log(props)
//         this.state={
//             roll:"191"
//         }
//     }
//     render() {
//         return (
//             <div>
//                <h1>hello saurav</h1> 
//             </div>
//         )
//     }
// }
import React, { Component } from 'react'
import Marks from './Marks'

export default class Student extends Component {
    render() {
        console.log("student rendered [child of app]")
        return (
            <div>
                <h1>hello {this.props.name}</h1>
                <Marks />
            </div>
        )
    }
}
