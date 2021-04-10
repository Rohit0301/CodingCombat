import React, { Component } from 'react';
import './App.css';

import Algopage from './Algorithms/AlgoPage/algoPage';
import Algohome from './Algorithms/AlgoHome/algoHome';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from './Login/login';


class App extends Component {

  render(){
    const history = createBrowserHistory();
    return (
      
      <React.Fragment>
        <Router history={history}>
         <Switch>
            <Route path="/Algorithms" exact>
              <Algohome />
            </Route>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/Algorithms/:name" exact>
              <Algopage />
            </Route>
        </Switch> 
       </Router>        
      </React.Fragment>
    );
  }
}

export default App;