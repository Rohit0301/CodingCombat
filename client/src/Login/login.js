import React from "react"
import './login.css'
import GoogleLogin from 'react-google-login'
import GithubLogin from 'react-github-login'
import githubLogin from "../services/githubLogin"
import googleLogin from "../services/googleLogin"
import ReactArcText from 'react-arc-text-fix'
import Navbar from '../Navbar/navbar';
import { Grid ,Paper, Typography,Link,Button, requirePropFactory} from '@material-ui/core';
require('dotenv').config();

const login = () => {
    
    const responseGithub =  async(response) => { 
        let githubResponnse  = await githubLogin(response.code)
        console.log(githubResponnse)
      }
  
      const responseGoogle = async(response) => {
        let googleResponse  = await googleLogin(response.accessToken)
        console.log(googleResponse)
      }


    return(
        <>
          <Navbar/>
            <Grid container className="main">
                <Grid item className="item1" x5={8}>
                    <Paper elevation={3} className="paper">
                        <Grid container direction="column"  className="innerDiv">
                       
                            <Typography className="heading">Join Bruteforce</Typography>
                            <br></br>
                            
                         <Grid container direction="row" justify="center" spacing={0}>
                             <Grid item  sm={6} xs={6} lg={6}>
                    
                                <GoogleLogin
                                    
                                    clientId={process.env.REACT_APP_GOOGLE_API_KEY}
                                    render={renderProps => (
                                    <Button className="googlebutton" onClick={renderProps.onClick} > <i class="fab fa-google fa-5x"></i></Button>)}
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
                            
                                <Typography className="signup">Don't have account?<Link  component="button" className="Link"><b>Sign up</b></Link></Typography>
               
                            </center>
                           
                 
                        </Grid>
                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </>
    );
}
export default login;