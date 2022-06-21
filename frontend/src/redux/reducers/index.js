
import loggedReducer from "./isLogged";
import navigationReducer from "./navigation";
import { combineReducers } from "redux";

const allReducers = combineReducers({
   
    isLogged: loggedReducer,
    navigation : navigationReducer
    
}) 

export default allReducers