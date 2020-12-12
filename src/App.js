import React from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/Container';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='header'>
         
            <Header projectName={'Dashboard'} />
         
        </div>
      </div>
      <div className="container-component">
        <Route path='/Dashboard' component={Container} />
      </div>
      <div className="main-container">
        <div className="nav-container">
          <NavigationBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
