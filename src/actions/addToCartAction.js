import types from "./types";
import axios from "axios";

export const addToCartAction = (itemID, token) => dispatch =>{
    console.log(itemID, token);
    try{
        axios({
            method: "POST",
            url: "/api/addToCart.php",
            data:{
                itemID: itemID,
                token: token
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