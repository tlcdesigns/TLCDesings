import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import loggedinReducer from "./logginReducer"


const rootReducer = combineReducers({
    form: formReducer,
    loggedinReducer
});

export default rootReducer