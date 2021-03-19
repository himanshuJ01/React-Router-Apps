import React from 'react';
import './App.css';
import Home from './Home';
import Team from './Team';
import About from './About';
import Header from './Header';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

const App =() => {
   return(
      <Router>
     <>
     <Header></Header> 
    
     <Switch>
      <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/team' component={Team}></Route>
        <Route component={() => 'NOT FOUND'}></Route>
     </Switch>
     </>
     </Router>


   )
}


export default App;
