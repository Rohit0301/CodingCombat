import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

