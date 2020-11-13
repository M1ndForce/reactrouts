import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import React from "react";
import "react-router-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}
