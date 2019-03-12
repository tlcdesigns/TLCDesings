import types from "../actions/types";

const DEFAULT_STATE = {
    message: "unable to get data"
}

export default (state=DEFAULT_STATE, action) =>{
    switch(action.type){
        case types.ADDITEMTOCART:
            return {...state, cartConfirmation: action.data}
        case types.ADDITEMTOCARTERROR:
            return{...state, cartConfirmation: action.data}
        default: 
            return state
    }
} 