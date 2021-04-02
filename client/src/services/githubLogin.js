
  import axios from "axios";

  /**
   * 
   * @param {*} accesstoken This is the accesstoken of the user obtained from Github
   */
  const githubLogin = async (accesstoken) => {
	 
	  let res = await axios.post(
		"http://localhost:8000/rest-auth/github/",
		{
		  code: accesstoken,
		}
	  );
	  
	  return await res.status;
	};
  
  export default githubLogin;