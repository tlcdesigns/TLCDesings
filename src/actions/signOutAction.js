import types from "./types"
import axios from "axios";

export const signOutAction = (values) => dispatch => {
    debugger;
    try {
        axios({
            method: "POST",
            url: "/api/signOut.php",
            data: {
                token: values
            }
        }).then((signOutConfirmation) => {
            localStorage.removeItem("token");
            dispatch({
                type: types.SIGNUSERIN,
                token: ""
            })
        })
    } catch {
        localStorage.removeItem("token");
        dispatch({
            type: types.SIGNUSERIN,
            token: ""
        })
    }

}