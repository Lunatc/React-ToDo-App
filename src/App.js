import React, { Component } from 'react'
import './App.css';
import Checkbox from '@mui/material/Checkbox';

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
        <div className="card">
            <h1 className="title">Add a new task...</h1>
              
              <input 
                type="text"
                placeholder="Type your task here..."
                value={this.state.newItem}
                onChange={e => this.updateInput("newItem", e.target.value)}
              />
              
              <button onClick={() => this.addItem()}>
                Add
              </button>

              <div className="list">

                <ul>
                    {this.state.list.map(item => {
                      
                      return(
                        <div className="task">
                          <ul key={item.id}>

                          <Checkbox color="error"/>
                                
                            <label className="item">
                              {item.value}
                            </label>
                                
                            <label className="delete">
                              <button className="delete-button" onClick={() => this.deleteItem(item.id)}>
                                Delete
                              </button>
                            </label>
                          </ul>
                        </div>
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
