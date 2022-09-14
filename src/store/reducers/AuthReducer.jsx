const initialState = {
    error:null,
    token:null,
    success:false
}

const AuthReducer = (state = initialState, action) => {
  switch(action.type){
    case "SIGNUP_SUCCESS":
      return{
        ...state,
        token:action.obj.authtoken,
        success:action.obj.success
      }
    case "LOGIN_SUCCESS":
      return{
        ...state,
        token:action.obj.authtoken,
        success:action.obj.success
      }
    case "LOGIN_FAIL":
      return{
        ...state,
        error:action.obj.error
      }
    case "LOGOUT":
      return{
          ...state,
          token:null,
          success:false
      }
    case "SIGNUP_FAIL":
      return{
        ...state,
        error:action.obj.error
      }
    default:
      return state;
  }
}

export default AuthReducer