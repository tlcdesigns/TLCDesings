import types from "./types";
import axios from "axios";

export const getAllProducts = (values) => dispatch => {
    try {
        axios({
            method: "POST",
            url: "/api/getAllProducts.php"
        }).then((allProducts) => {
            dispatch({
                type: types.ALLPRODUCTS,
                payload: allProducts.data.allProductData
            })
        })
    } catch {
        dispatch({
            type: types.ALLPRODUCTSERROR,
            payload: "Couldn't get products"
        })
    }
}