
  import axios from "axios";

  /**
   * 
   * @param {*} accesstoken This is the accesstoken of the user obtained from Github
   */
  const githubLogin = async (accesstoken) => {
	 
	  let res = await axios.post(
		`${process.env.REACT_APP_GITHUB_LOGIN_ROUTE}`,
		{
		  code: accesstoken,
		}
	  );
	  
	  return await res.status;
	};
  
  export default githubLogin;