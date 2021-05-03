import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { useState } from 'react';


export default function App() {
  return (
    <Router>
      <div>
        <div class="navbar container-fluid card">
          <div>
              <Link to="/" class="link">Home</Link>
              <Link to="/about" class="link">About</Link>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

    function TodoItem({ id, item, onCheck }) {
      return (
          <>
         <li
             onClick={() => {onCheck(id)}}
          >
             {item}  
         </li>
          </>
      )
    }

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }
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

function About() {
  return (
    <div className="App">
      <div class="card">
        <div class="title">
          About
          <br/>
          <div class="card-text">
            Olá pessoa que está lendo isso daqui, se você não é a Cíntia, seja bem-vindo. Criei esse app para meus estudos de React e pretendo melhora-lo o quanto possível. Quem sabe até usa-lo no meu dia a dia.hehe
          </div>
        </div>
      </div>
    </div>
  );
}
