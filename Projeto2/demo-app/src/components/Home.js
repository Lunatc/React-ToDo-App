import React from "react";
import TodoItem from "./components/TodoItem";
import addItem from "./components/addItem";
import removeItem from "./components/removeItem";
import './App.css';
import { useState } from 'react';


function Home() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
  
    return (
      <div className="App">
        <div class="card">
          <div class="title">
            Add a new task...
            <br/>
            <input 
              type="text"
              placeholder="Type your task here..."
              value={input}
              onChange={(event) => {setInput(event.target.value)}}
            />
            <button
              onClick={addItem}
            >
              Add
            </button>
            <br/>
            <ul>
                  {items.map((item, index) => (
                      <TodoItem
                          key={index}
                          id={index}
                          item={item}
                          onCheck={removeItem}
                      />
                  ))}
              </ul>
          </div>
        </div>
      </div>
    );
  }