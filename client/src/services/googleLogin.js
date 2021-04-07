import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */
const googleLogin = async (accesstoken) => {
    let res = await axios.post(
      `${process.env.GOOGLE_LOGIN_ROUTE}`,
      {
        access_token: accesstoken,
      }
    );

    return await res.status;
  };

export default googleLogin;