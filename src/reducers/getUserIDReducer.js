import types from "../actions/types";

const DEFAULT_STATE = {
    message: "Unable To Get User ID"
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GETUSERID:
            return {...state, userID: action.payload};
        case types.GETUSERIDERROR:
            return {...state, userID: "Unable To Get User ID"};
        default:
            return state
    }
}