import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useLocation} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import PageWrapper from './pagewrapper';


function App() {
  return (
   <Router >
     <div className="App">
        <div id="page" className="page one-page-style">
            <NavBar/>
            <PageWrapper/>
        </div>
      </div>
    </Router>
  
  );
}

export default App;
