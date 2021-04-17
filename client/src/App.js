import React, { Component } from 'react';
import './App.css';

import Algohome from './Algorithms/AlgoHome/algoHome';
import Algopage from './Algorithms/AlgoPage/algopage';

import DShome   from './DataStructures/DShome/ds_home'
import DSpage   from './DataStructures/DSpage/ds_page'

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './Home/Home';
import About from './About/About';

class App extends Component {
  constructor(){
    super();
    this.state={isLogin:false,key:""};
  }
  componentWillMount(){
    const key=localStorage.getItem("gl205d3125l9");

    if(key!=null){
      this.setState({
        isLogin:true
      });
    }
    else{
      this.setState({
        isLogin:false
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
            
            <Route path="/" exact component={Home}    />

            <Route path="/About" exact component={About}    />
           
            
            <Route path="/Algorithms/:name" exact>
                {this.state.isLogin ?  <Algopage />: <Redirect to="/" /> }
            </Route>


            <Route path="/Algorithms" exact>
                 {this.state.isLogin ?  <Algohome />: <Redirect to="/" /> }
            </Route>  

            <Route path="/DataStructures" exact>
              {this.state.isLogin ?  <DShome />: <Redirect to="/" /> }
            </Route>  

            
            <Route path="/DataStructures/:name" exact>
            {this.state.isLogin ?  <DSpage />: <Redirect to="/" /> }
            </Route>

        </Switch> 
       </Router>        
      </React.Fragment>
    );
  }
}

export default App;
