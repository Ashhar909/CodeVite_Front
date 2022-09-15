import AuthReducer from "./AuthReducer";
import FormReducer from "./FormReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  authR: AuthReducer,
  formR: FormReducer,
});

export default RootReducer;
