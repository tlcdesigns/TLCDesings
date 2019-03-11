import types from "./types";
import axios from "axios";

export const getItemDetails = (values) => dispatch => {
    try {
        axios({
            method: "POST",
            url: "/api/itemDetails.php",
            data: {
                ID: values
            }
        }).then((itemDetails) => {
            dispatch({
                type: types.ITEMDETAILS,
                payload: itemDetails.data
            })
        })
    } catch {
        dispatch({
            type: types.ITEMDETAILSERROR,
            payload: "unable To Get Data"
        })
    }
}