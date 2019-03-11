import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import loggedinReducer from "./logginReducer";
import allProductsReducer from "./allProductsReducer"
import itemDetailsReducer from "./itemDetailsReducer"


const rootReducer = combineReducers({
    form: formReducer,
    loggedinReducer,
    allProductsReducer,
    itemDetailsReducer
});

export default rootReducer