import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Soda from './Soda';
import Chocolate from './Chocolate';
import Chips from './Chips';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
      <h1>Hello Router!</h1>
        <NavBar/>
        <Switch>
          <Route exact path="/"> <VendingMachine/></Route>
          <Route exact path="/soda"><Soda/></Route>
          <Route exact path="/chocolate"><Chocolate /></Route>
          <Route exact path="/chips"><Chips/></Route>
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
