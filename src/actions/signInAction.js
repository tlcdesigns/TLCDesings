import axios from "axios";
import types from "./types";

export const signInAction = (values) => dispatch => {
    const {Email, Password} = values;
    try {
        axios({
            method: "POST",
            url: ".php",
            data: {
                Email,
                Password
            }
        }).then((token) => {
            dispatch({
                type: types.WHATEVERTYPE,
                token: token.data[0]

            })
        })
    } catch {
        dispatch({
            type: types.WHATEVERTYPE,
            message: "Invalid Username/Password"
        })
    }
}