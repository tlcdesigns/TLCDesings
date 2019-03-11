import types from "../actions/types";

const DEFAULT_STATE = {
    message: "Unable To Get Data"
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.ITEMDETAILS:
            return {...state, itemDetails: action.payload};
        case types.ITEMDETAILSERROR:
            return {...state, message: action.payload};
        default:
            return state
    }
}