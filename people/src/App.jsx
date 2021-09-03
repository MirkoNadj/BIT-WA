import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'

function App() {
  
  return (
    <Router>
      <Route path='/home' component={Home}/>
      <Route path='/about/:title' component={About}/>
      <Redirect from='' to='/home'/>
    </Router>
  );
}

export default App;
