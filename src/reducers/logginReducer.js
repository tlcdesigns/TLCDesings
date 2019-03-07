import types from "../actions/types";

const DEFAULT_STATE = {
    message: "Invalid Username Or Password"
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.SIGNUSERIN:
            return {...state, message: action.token.error, token: action.token.token};
        case types.SIGNUSERINERROR:
            return {...state, message: action.message, success: false};
        default:
            return state
    }
}