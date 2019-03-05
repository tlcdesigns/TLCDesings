import axios from "axios";
import types from "./types";

export const signUserUp = (values) => dispatch => {
    debugger;
    const {Email, Password, username} = values;
    try {
        axios({
            method: "POST",
            url: "/api/signUp.php",
            data: {
                Email,
                Password,
                username
            }
        }).then((token) => {
            dispatch({
                type: types.SIGNUSERUP,
                token: token.data[0]
            })
        })
    } catch {
        dispatch({
            type: types.SIGNUSERUPERROR,
            message: "Unable To Sign User In"
        })
    }
}