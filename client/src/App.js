import React, { Component } from 'react';
import './App.css';

import Login    from './Login/login';
import Algohome from './Algorithms/AlgoHome/algoHome';
import Algopage from './Algorithms/AlgoPage/algopage';

import DShome   from './DataStructures/DShome/ds_home'
import DSpage   from './DataStructures/DSpage/ds_page'

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './Home/Home';



class App extends Component {
  constructor(){
    super();
    this.state={isLogin:false};
  }
  componentDidMount(){
    const key=localStorage.getItem("userKey");
    if(key==null){
     this.setState({
       isLogin:true
     });
    }
    else{
      this.setState({
        isLogin:true
      });
    }
    console.log(this.state.isLogin);
  }
  render(){
    const history = createBrowserHistory();
    return (
      
      <React.Fragment>
        <Router history={history}>
         <Switch>
            
            <Route path="/"           exact component={Home}    />
            <Route path="/Algorithms" >
               {this.state.isLogin ?  <Algohome />: <Redirect to="/" /> } 
            </Route>  
            
            <Route path="/Algorithms/:name" exact>
              <Algopage />
            </Route>

            <Route path="/DataStructures" exact component={DShome}>
               {this.state.isLogin ?  <DShome />: <Redirect to="/" /> } 
            </Route>  
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
