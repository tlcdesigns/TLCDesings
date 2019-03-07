import axios from "axios";
import types from "./types";

export const signInAction = (values) => dispatch => {
    const {Email, Password} = values;
    try {
        axios({
            method: "POST",
            url: "/api/signIn.php",
            data: {
                Email,
                Password
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
            message: "Invalid Username/Password"
        })
    }
}