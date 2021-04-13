import React, { Component } from 'react';
import './App.css';

import Login    from './Login/login';
import Algohome from './Algorithms/AlgoHome/algoHome';
import Algopage from './Algorithms/AlgoPage/algopage';

import DShome   from './DataStructures/DShome/ds_home'
import DSpage   from './DataStructures/DSpage/ds_page'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './Home/Home';



class App extends Component {

  render(){
    const history = createBrowserHistory();
    return (
      
      <React.Fragment>
        <Router history={history}>
         <Switch>
            
            <Route path="/"           exact component={Home}    />
            <Route path="/Algorithms" exact component={Algohome} />
            
            <Route path="/Algorithms/:name" exact>
              <Algopage />
            </Route>

            <Route path="/DataStructures" exact component={DShome} />
            <Route path="/DataStructures/:name" exact>
              <DSpage />
            </Route>

        </Switch> 
       </Router>        
      </React.Fragment>
    );
  }
}

export default App;
