import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import GithubLogin from 'react-github-login';
import githubLogin from "./services/githubLogin"
import googleLogin from "./services/googleLogin"
import './App.css';

class App extends Component {

  render() {
    const responseGithub =  async(response) => {
      let githubResponnse  = await githubLogin(response.code)
     
    }

    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
     
    }

  

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <GithubLogin
          clientId="e1d7f23a57a3c7d4b6f2"
          redirectUri="" 
          onSuccess={responseGithub}
          onFailure={responseGithub}
        />
        <br />
        <br />


        <GoogleLogin
          clientId="49877284150-fvg0c6i2aa7ol5hl60l97qqcs62u2tc6.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}

        />

      </div>
    );
  }
}

export default App;