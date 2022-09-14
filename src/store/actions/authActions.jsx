export const createUser = (creds) => {
    return async (dispatch) => {
      const response = await fetch("http://localhost:3005/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });
      const json = await response.json()
      if(!json.error){
        console.log("User logged in");
        dispatch({
            type:"LOGIN_SUCCESS",
            obj:json
        })
      }
      else{
        console.log(json.error.message);
        dispatch({
            type:"LOGIN_FAIL",
            obj:json.error.message
        })
      }
    };
  };


export const LoginUser = (creds) => {
    return async (dispatch) => {
      const response = await fetch("http://localhost:3005/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(creds),
      });
      const json = await response.json()
      if(!json.error){
        console.log("User logged in");
        dispatch({
            type:"LOGIN_SUCCESS",
            obj:json
        })
      }
      else{
        console.log(json.error.message);
        dispatch({
            type:"LOGIN_FAIL",
            obj:json.error.message
        })
      }
    };
  };

export const logout = () => {
  return({
      type: "LOGOUT"
    })
}