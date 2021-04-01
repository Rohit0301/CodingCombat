import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import fbLogin from "./services/fbLogin"
import googleLogin from "./services/googleLogin"
import './App.css';

class App extends Component {

  render() {
    const responseFacebook = async (response) => {
      let fbResponse  = await fbLogin(response.accessToken)
      console.log(fbResponse);
      console.log(response);
    }

    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="369463637510904"
          fields="name,email"
          callback={responseFacebook}
          version="3.1"
          redirectUri="http://localhost:8000/rest-auth/user/"
        />
        <br />
        <br />


        <GoogleLogin
          clientId="49877284150-fvg0c6i2aa7ol5hl60l97qqcs62u2tc6.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          redirectUri="http://localhost:8000/rest-auth/user/"
        />

      </div>
    );
  }
}

export default App;