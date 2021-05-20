import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";


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
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
