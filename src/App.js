import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import {Switch, HashRouter, Route} from 'react-router-dom'
import Home from './pages/home/index';
//const Home = import('./pages/home/index')

function App() {
  return (
    <HashRouter>
    	<Switch>
        {/* <Route path='/:brand/:branch' exact component={Home}/> */}
        <Route path='/' exact component={Home}/>
    	</Switch>
    </HashRouter>
  );
}

export default App;
