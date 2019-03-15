import types from "../actions/types";

const DEFAULT_STATE = {
    message: "Unable To Pull Cart Items"
}

export default (state=DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GETCARTITEMS:
            return {...state, cartItems: action.payload}
        case types.GETCARTITEMSERROR:
            return {...state, message: action.payload}
        default:
            return state
    }
}