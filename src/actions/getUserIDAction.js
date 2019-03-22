import types from "./types"
import axios from "axios";

export const getUserIDAction = token => dispatch => {
    try {
        axios({
            method: "POST",
            url: "/api/userUserID.php",
            data: {
                token: token
            }
        }).then((userID) => {
            dispatch({
                type: types.GETUSERID,
                payload: userID.data.userToken
            })
        })
    } catch {
        dispatch({
            type: types.GETUSERIDERROR,
            payload: "Unable To Get User ID"
        })
    }
};