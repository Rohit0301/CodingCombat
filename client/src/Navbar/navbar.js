import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';


const styleSheet = {
  list : {
    width : 200,
  },
  nav:{
    color:"grey",
    textDecoration:"none",
  },
  padding : {
    paddingRight : 20,
    color:"white",
    textDecoration:"none",
    cursor : "pointer",
  },
  active : {
    fontWeight:600,
    color:"yellow",
    fontSize:"1.1rem",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  }
}

class navbar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    const {classes} = this.props
    return (
      <div>
        <AppBar >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              <Typography color="inherit" variant = "headline">Bruteforce</Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <NavLink to='/'                className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {1} button divider>  Home           </ListItem> </NavLink>
               <NavLink to='/DataStructures/' className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {2} button divider>  DataStructures </ListItem> </NavLink>
               <NavLink to='/Algorithms/'     className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {3} button divider>  Algorithms     </ListItem> </NavLink>
               <NavLink to='/About/'          className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {4} button divider>  About          </ListItem> </NavLink>
             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
        <>
   
      <AppBar>
        <Toolbar>
      
        <Typography variant = "headline"   color="inherit" style={{flexGrow:1}} > 
          <b style={{fontSize:20}}>
            <NavLink to='/' className = {classes.padding}>Bruteforce</NavLink>
          </b>
        </Typography> 
        
        
        <Typography variant = "subheading" color="inherit" className = {classes.padding}>
          <NavLink to='/'                className = {classes.padding}   activeClassName={classes.active} exact>Home</NavLink>
        </Typography>
     
          
        <Typography variant = "subheading" color="inherit" className = {classes.padding} >
          <NavLink to='/DataStructures/' className = {classes.padding} activeClassName={classes.active} exact>DataStructures</NavLink>
        </Typography>
       
        <Typography variant = "subheading" color="inherit" className = {classes.padding}>
          <NavLink to='/Algorithms/'     className = {classes.padding} activeClassName={classes.active} exact>Algorithms</NavLink>
        </Typography>
         
        <Typography variant = "subheading" color="inherit" className = {classes.padding}>
          <NavLink to='/About/'          className = {classes.padding} activeClassName={classes.active} exact>About</NavLink>
        </Typography>
         
        

        </Toolbar>
      </AppBar>
      </>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

navbar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(navbar);