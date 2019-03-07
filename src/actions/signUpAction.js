import axios from "axios";
import types from "./types";

export const signUserUp = (values) => dispatch => {
    const {Email, Password, Username} = values;
    try {
        axios({
            method: "POST",
            url: "/api/signUp.php",
            data: {
                Email,
                Password,
                Username
            }
        }).then((token) => {
            dispatch({
                type: types.SIGNUSERIN,
                token: token.data
            })
        })
    } catch {
        dispatch({
            type: types.SIGNUSERINERROR,
            message: "Unable To Sign User In"
        })
    }
}