import types from "./types"

export default signOutAction => dispatch => {
    localStorage.removeItem("token");
    dispatch({
       type: types.SIGNUSERIN,
        token: ""
    })
}