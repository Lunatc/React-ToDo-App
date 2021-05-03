import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }


  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    });
  }
  addItem(){
    //create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of itens
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input 
    this.setState({
      list, 
      newItem:""
    });
  }
  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list:updatedList});
  }

  render(){
    return (
      <div className="App">
        <div class="card">
          <div class="title">
            Add a new task...
            <br/>
            <input 
              type="text"
              placeholder="Type your task here..."
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button
              onClick={() => this.addItem()}
            >
              Add
            </button>
            <br/>
            <ul>
              {this.state.list.map(item => {
                return(
                  <ul key={item.id}>
                    <label class="container">
                      <input type="checkbox"/>
                      <span class="checkmark"></span>
                    </label>
                    <label class="item">
                      {item.value}
                    </label>
                    <label class="container2">
                      <button
                      onClick={() => this.deleteItem(item.id)}
                      >
                      Delete
                      </button>
                    </label>
                  </ul>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
