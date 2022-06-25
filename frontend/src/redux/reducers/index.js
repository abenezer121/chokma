
import loggedReducer from "./isLogged";
import navigationReducer from "./navigation";
import userReducer from "./userType";
import { combineReducers } from "redux";

const allReducers = combineReducers({
   
    isLogged: loggedReducer,
    navigation: navigationReducer,
    usertype : userReducer
    
}) 

export default allReducers