import React, { Component } from 'react'

export default class SingleName extends Component {

    getStyle=()=>{
        if(this.props.name.sex==='f'){
            return { backgroundColor: "pink",borderColor:'white',margin:'2px'}
          
        }else {
            return { backgroundColor: "#46CBE9",borderColor:'white',margin:'2px'}
        }    
    }
    render() {
        return (
            
           <button onClick={this.props.deleteName.bind(this,this.props.name.id)} style={this.getStyle()}>{this.props.name.name}</button>
          
        )
    }
}


