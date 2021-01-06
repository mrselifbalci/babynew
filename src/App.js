import React, { Component } from "react";
import "./App.css";
import names from "./components/Names";
import AllNames from "./components/AllNames";
import Favorite from "./components/Favorite";
import Input from "./components/Input"



export default class App extends Component {

  state={
    allnames:names,
    favoriteNames:[],
  }
  filterNames = (e) => {
    this.setState({
      allnames: names.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  };

  onlyGirls = (e) => {
    this.setState({
      allnames: names.filter((item) => item.sex === "f"),
    });
  };

  onlyBoys = (e) => { 
    this.setState({
      allnames: names.filter((item) => item.sex === "m"),
    });
  };

  defaultNames=()=>{
    this.setState({
        allnames: names
      });
  }

  deleteName=(id)=>{
    this.setState({
      allnames:[...this.state.allnames.filter(name=>name.id!==id)],
      favoriteNames:[...this.state.favoriteNames,...this.state.allnames.filter(name=>name.id===id)],
     
    })
  }
  nameBack=(id)=>{
   
      this.setState({
        allnames:[...this.state.allnames,...this.state.favoriteNames.filter(name=>name.id===id)],
        favoriteNames:[...this.state.favoriteNames.filter(name=>name.id!==id)]
  
      })
  }


  render() {
    return (
      <div style={{ marginTop: 20 }} className="App">
      <h1 style={{ color: "hotpink" }}>Baby Name Picker</h1>
      <br />
         <Input
          names={names}
          filterNames={this.filterNames}
          onlyGirls={this.onlyGirls}
          onlyBoys={this.onlyBoys}
          defaultNames={this.defaultNames}
        />
       
        {this.state.favoriteNames.length===0 ? 
        (<h3 style={{ color: "grey" }}>Click on the names to add to your favorites.</h3>) :(<h3 style={{ color: "grey" }}>Favorites:<span>(Click to remove from the favorites.)</span></h3>) }
        
        <Favorite favoriteNames={this.state.favoriteNames} nameBack={this.nameBack}/>
        <AllNames names={this.state.allnames} deleteName={this.deleteName} />
      </div>
    );
  }
}
