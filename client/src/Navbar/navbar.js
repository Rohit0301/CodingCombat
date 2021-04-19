import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer,Button
} from '@material-ui/core';
import {NavLink,withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SimpleDialogDemo from './Dialog';
import './navbar.css';
// import googleLogin from "../services/googleLogin"
// import githubLogin from "../services/githubLogin"



const styleSheet = {
  list : {
    width : 200,
  },
  nav:{
    color:"grey",
    textDecoration:"none",
  },
  padding1:{
    paddingRight : 22,
  },
  padding : {
    color:"black",
    textDecoration:"none",
    cursor : "pointer",
  },
  active : {
    borderBottom:".3rem inset #333"
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
    this.state = {drawerActivate:false, drawer:false,isLogin:false,status:""};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
  }



  handleLogout() {
    this.setState(state => ({
      isLogin:false
    }));
    localStorage.clear();
    this.props.history.push("/");
   }

//     Authentication =  async(response,code) => {
//     console.log(response);
//     let Response;
//     if(code==="gl205d3125l9")
//          Response  = await googleLogin(response);
//     if(code==="th156df785n")       
//          Response =await githubLogin(response);
//     console.log(Response+" hit");
//     if(Response===200){
//       this.setState({
//         isLogin:true
//       });
//     }
//     else{
//       this.setState({
//         isLogin:false,
//       });
//   }
// }
  

  componentWillMount(){
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }

      const key=localStorage.getItem("gl205d3125l9");
        if(key!=null ){
          this.setState({
            isLogin:true
          });
        }
        else{
          this.setState({
            isLogin:false
          });
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
      <React.Fragment>
        <AppBar >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              <Typography color="inherit" variant = "body1" className="brute">Bruteforce</Typography>
              <Typography color="inherit" variant = "body1"></Typography>
               {(this.state.isLogin)?null:<SimpleDialogDemo/>}
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

            {(this.state.isLogin)?
            <List className = {this.props.classes.list}>
               <NavLink to='/'                className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {1} button divider>  Home           </ListItem> </NavLink>
               <NavLink to='/DataStructures/' className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {2} button divider>  DataStructures </ListItem> </NavLink>
               <NavLink to='/Algorithms/'     className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {3} button divider>  Algorithms     </ListItem> </NavLink>
               <NavLink to='/About/'          className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {4} button divider>  About          </ListItem> </NavLink>
                <ListItem onClick={this.handleLogout} key = {4} button divider>  Logout  </ListItem>
             </List>
             :<List className = {this.props.classes.list}>
                <NavLink to='/'                className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {1} button divider>  Home           </ListItem> </NavLink>
                <NavLink to='/About/'          className = {classes.nav}   activeClassName={classes.active} exact> <ListItem key = {4} button divider>  About          </ListItem> </NavLink>
             </List>
             }

         </div>
       </SwipeableDrawer>

      </React.Fragment>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    if(this.state.isLogin){
    return (
        <>
   
      <AppBar>
        <Toolbar>
      
        <Typography variant = "body1"   color="inherit" style={{flexGrow:1}} > 
          <b style={{fontSize:20}}>
            <NavLink to='/' className = {classes.padding}>Bruteforce</NavLink>
          </b>
        </Typography> 
        
        
        <Typography variant = "body1" color="inherit" className = {classes.padding1}>
           <NavLink to='/'  className = {classes.padding}   activeClassName={classes.active} exact>Home</NavLink>
        </Typography>
        <Typography variant = "body1" color="inherit" className = {classes.padding1} >
           <NavLink to='/DataStructures/' className = {classes.padding} activeClassName={classes.active} exact>DataStructures</NavLink>
        </Typography>
   
         <Typography variant = "body1" color="inherit" className = {classes.padding1}>
           <NavLink to='/Algorithms/' className = {classes.padding} activeClassName={classes.active} >Algorithms</NavLink>
        </Typography>
       
        <Typography variant = "body1" className = {classes.padding1} color="#333" ><NavLink to='/About/' className = {classes.padding} activeClassName={classes.active} exact>About</NavLink></Typography>
        <Button style={{backgroundColor:"#333",color:"white"}} onClick={this.handleLogout}>
           Logout
         </Button>
        
         
        </Toolbar>
      </AppBar>
      </>
    )
  }
else{

  return (
    <>

  <AppBar>
    <Toolbar>
  
    <Typography variant = "body1"   color="inherit" style={{flexGrow:1}} > 
      <b style={{fontSize:20}}>
        <NavLink to='/' className = {classes.padding}>Bruteforce</NavLink>
      </b>
    </Typography> 
    <Typography variant = "body1" color="inherit" className = {classes.padding1}>
      <NavLink to='/'                className = {classes.padding}   activeClassName={classes.active} exact>Home</NavLink>
    </Typography>
    <Typography variant = "body1" className = {classes.padding1} color="inherit" >
      <NavLink to='/About/' className = {classes.padding} activeClassName={classes.active} exact>About</NavLink>
    </Typography>
    <SimpleDialogDemo/>
    </Toolbar>
  </AppBar>
  </>
)
}
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



export default withStyles(styleSheet)(withRouter(navbar));