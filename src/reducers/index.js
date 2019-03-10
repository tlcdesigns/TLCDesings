import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import loggedinReducer from "./logginReducer";
import allProductsReducer from "./allProductsReducer"


const rootReducer = combineReducers({
    form: formReducer,
    loggedinReducer,
    allProductsReducer
});

export default rootReducer