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
<<<<<<< HEAD
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
=======
  // constructor(){
  //   super();
  //   this.state={isLogin:false};
  // }
  componentDidMount(){
    // const key=localStorage.getItem("userKey");
    // if(key==null){
    //  this.setState({
    //    isLogin:true
    //  });
    // }
    // else{
    //   this.setState({
    //     isLogin:true
    //   });
    // }
    // console.log(this.state.isLogin);
>>>>>>> 6812e3f8001959c69d7711601360969404e16c7e
  }
  render(){
    const history = createBrowserHistory();
    return (
      
      <React.Fragment>
        <Router history={history}>
         <Switch>
            
<<<<<<< HEAD
            <Route path="/" exact component={Home}    />

            <Route path="/About" exact component={About}    />
           
=======
            <Route path="/"           exact component={Home}    />
            <Route path="/Algorithms" >
               {this.state.isLogin ?  <Algohome />: <Redirect to="/" /> } 
            </Route>  
>>>>>>> 6812e3f8001959c69d7711601360969404e16c7e
            
            <Route path="/Algorithms/:name" exact>
                {this.state.isLogin ?  <Algopage />: <Redirect to="/" /> }
            </Route>

<<<<<<< HEAD

            <Route path="/Algorithms" exact>
                 {this.state.isLogin ?  <Algohome />: <Redirect to="/" /> }
            </Route>  

            <Route path="/DataStructures" exact>
              {this.state.isLogin ?  <DShome />: <Redirect to="/" /> }
=======
            <Route path="/DataStructures" exact component={DShome}>
               {this.state.isLogin ?  <DShome />: <Redirect to="/" /> } 
>>>>>>> 6812e3f8001959c69d7711601360969404e16c7e
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
