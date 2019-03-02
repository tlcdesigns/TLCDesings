import axios from "axios";
import types from "./types";

export const signInAction = (values) => dispatch => {
    const {Email, Password} = values;
    try {
        axios({
            method: "POST",
            url : ".php",
            data: {
                Email,
                Password
            }
        })
    } catch {

    }
}