import types from "./types";
import axios from "axios";

export const addToCartAction = (values) => dispatch =>{
    try{
        axios({
            method: "POST",
            URL: "/api/whatever.php",
            data:{
                ID: values
            }
        }).then((cartConfirmation)=>{
            dispatch({
                type: types.ADDITEMTOCART,
                data: cartConfirmation.data
            })
        })
    }catch{
        dispatch({
            types: types.ADDITEMTOCARTERROR,
            data: "unable to get data"
        })
    }
}