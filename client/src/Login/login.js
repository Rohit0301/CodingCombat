import React from "react"
import './login.css'
import GoogleLogin from 'react-google-login'
import GithubLogin from 'react-login-github'
import githubLogin from "../services/githubLogin"
import googleLogin from "../services/googleLogin"
import GitHubIcon from '@material-ui/icons/GitHub';

import { Grid ,Paper, Typography} from '@material-ui/core';

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
            <Grid container className="main">
                <Grid item className="item1" x5={8}>
                    <Paper elevation={3} className="paper">
                        <Grid container direction="column"  className="innerDiv">
                            <Typography className="heading">Join Bruteforce</Typography>
                            <br></br>
                            
                         <Grid>
                            <center>
                            <GoogleLogin
                                clientId="49877284150-fvg0c6i2aa7ol5hl60l97qqcs62u2tc6.apps.googleusercontent.com"
                                buttonText="LOG IN WITH GOOGLE"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                className="googleButton" 
                            />
                            <br />
                            <br />
                        
                           
                                <GithubLogin
                                    clientId="e1d7f23a57a3c7d4b6f2"
                                    // type="dark  "
                                    redirectUri="" 
                                    onSuccess={responseGithub}
                                    onFailure={responseGithub}
                                    className="githubButton"
                                >
                                  <Grid container>  
                                    <GitHubIcon/>
                                    <Typography className="githubLoginText">LOG IN WITH GITHUB</Typography>
                                    </Grid> 
                                </GithubLogin> 
               
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