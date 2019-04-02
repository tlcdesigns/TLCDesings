import types from "./types";
import axios from "axios";

export const addToCartAction = (itemID, token, quantity) => dispatch =>{
    try{
        axios({
            method: "POST",
            url: "/api/addToCart.php",
            data:{
                itemID: itemID,
                token: token,
                quantity: quantity,
            }
        }).then((cartConfirmation)=>{
            debugger;
            dispatch({
                type: types.ADDITEMTOCART,
                data: cartConfirmation.data.message
            })
        })
    }catch{
        dispatch({
            types: types.ADDITEMTOCARTERROR,
            data: "unable to get data"
        })
    }
}