import React, { Component } from "react";
import SingleName from './SingleName'


 
export default class AllNames extends Component {
 
  render() {
    return (
      <div>
       {this.props.names.map((name)=>(   
      <SingleName name={name} deleteName={this.props.deleteName}/>
    ))}
    </div>
    )
  }
}
