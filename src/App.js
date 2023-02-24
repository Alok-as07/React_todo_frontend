import "./App.css";
import React from "react";
import ListItems from "./component/ListItems";

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    };
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
  };
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    });
    console.log("handleinput"+this.setState());
    console.log(e.target.value);
  };
  addItem(e){
    e.preventDefault();
    const newItem= this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== ""){
      const newitems=[...this.state.items,newItem];
      this.setState({
        items:newitems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-list" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter text here" value={this.state.currentItem.string} onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </header>
        <hr/>
        <ListItems items={this.state.items} />
      </div>
    );
  }
}

export default App;
