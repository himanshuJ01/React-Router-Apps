import React from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import Header from './Header';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

const App =() => {
   return(
      <Router>
     <>
     <Header></Header> 
    
     <Switch>
      <Route exact path='/'><Home/></Route>
        <Route exact path='/about'><About/></Route>
        <Route exact path='/profile/:name'><Profile/></Route>
        <Route component={() => 'NOT FOUND'}></Route>
     </Switch>
     </>
     </Router>


   )
}


export default App;
