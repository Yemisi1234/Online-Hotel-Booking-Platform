import { combineReducers } from "redux";
import { authenticationReducer } from "./authReducer";
//3. Combine multiple reducer function
const rootReducer = combineReducers({
  user: authenticationReducer,
});

export default rootReducer;
