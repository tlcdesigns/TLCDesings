import types from "../actions/types";

const DEFAULT_STATE = {
    action: "Unable To Get Data"
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.ALLPRODUCTS:
            return {...state, allProducts: action.payload};
        case types.ALLPRODUCTSERROR:
            return {...state, error: "Unable To Get Products"};
        default:
            return state
    }
}