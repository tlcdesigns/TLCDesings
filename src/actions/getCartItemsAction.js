import types from "./types";
import axios from "axios";

export const getCartItemsAction = (token) => dispatch => {
    try {
        axios({
            method: "POST",
            url: "/api/getCartItems.php",
            data: {
                token: token
            }
        }).then((cartItems) => {
            dispatch({
                type: types.GETCARTITEMS,
                payload: cartItems.data
            })
        })
    } catch {
        dispatch({
            type: types.GETCARTITEMSERROR,
            payload: "Unable To Get Cart Items"
        })
    }
}