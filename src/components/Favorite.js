import React, { Component } from "react";
import SingleFavorite from './SingleFavorite'


 
export default class Favorite extends Component {
 
  render() {
    return (
      <div>
        
        {this.props.favoriteNames.map((name)=>(
      <SingleFavorite name={name} nameBack={this.props.nameBack}/>
    ))}
    <hr style={{ width: "95%" }} />
    </div>
    )
  }
}





