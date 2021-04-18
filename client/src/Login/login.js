import {React,useState,useEffect} from "react"
import './login.css'
import GoogleLogin from 'react-google-login'
import GithubLogin from 'react-github-login'
import githubLogin from "../services/githubLogin"
import googleLogin from "../services/googleLogin"
import ReactArcText from 'react-arc-text-fix'
import { makeStyles } from '@material-ui/core/styles';
import { Grid ,Paper, Typography,Link,Button, requirePropFactory, LinearProgress} from '@material-ui/core';
require('dotenv').config();

const useStyles = makeStyles((theme) => ({
    root: {
      width: '90%',
      height:'.4rem',
      borderRadius:'6rem',
    },
  }));





export default function Login(props) {
    const classes=useStyles();
    
    // states
    const [isLoading, setIsLoading] = useState(false);

    const responseGithub =  async(response) => { 
        setIsLoading(true);
        let githubResponnse  = await githubLogin(response.code);
         localStorage.setItem('userKey', response.code);
         props.handleChange(response.code);
      }
  
      const responseGoogle = async(response) => {
        setIsLoading(true);
        let googleResponse  = await googleLogin(response.accessToken);
        localStorage.setItem('userKey', response.accessToken);
        props.handleChange(response.accessToken);
      }

 
    return(
        <>
            <Grid container className="main">
                 
                <Grid item className="item1" x5={8}>
                    <Paper elevation={3} className="paper">
                        <Grid container direction="column"  className="innerDiv">
                           <center>
                                {(isLoading)?<LinearProgress className={classes.root}/>:null}
                            </center> 
                            <Typography className="heading">Join Bruteforce</Typography>
                            <br></br>
                            
                         <Grid container direction="row" justify="center" spacing={0}>
                             <Grid item  sm={6} xs={6} lg={6}>
                    
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                                    render={renderProps => (
                                    <Button className="googlebutton" onClick={renderProps.onClick} >{console.log(process.env.REACT_APP_GOOGLE_API_KEY)} <i class="fab fa-google fa-5x"></i></Button>)}
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                />
                             
                             </Grid>
                             <Grid item sm={6} xs={6} lg={6}>
                             
                           
                                    <GithubLogin
                                            clientId={process.env.REACT_APP_GITHUB_API_KEY}
                                            buttonText=""
                                            redirectUri="" 
                                            onSuccess={responseGithub}
                                            onFailure={responseGithub}
                                            className="githubButton"
                                        
                                    ><i class="fab fa-github fa-5x"></i></GithubLogin>
                             </Grid>

                             <Grid item sm={12} xs={12} lg={12}>
                                        <ReactArcText
                                            text="Happy Learning  Happy coding "
                                            direction={-1}
                                            arc={140}
                                            className="curveText"
                                        />               
                                
                             </Grid>
                         
                              <center>
                            
                                <Typography className="signup"> Dont  have account?<Link  component="button" className="Link"><b>Sign up</b></Link></Typography>
               
                            </center>
                           
                 
                        </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </>
    );
}
