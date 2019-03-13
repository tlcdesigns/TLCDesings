import React, {Component, Fragment} from "react";
import {connect} from "react-redux"
import {getItemDetails} from "../../actions/getItemDetails"
import {addToCartAction} from "../../actions/addToCartAction"


class ItemDetails extends Component {

    addToCart = () => {
        let pathname = window.location.pathname;
        let itemID = pathname.slice(pathname.lastIndexOf("/")+1, pathname.length);
        let token = localStorage.getItem("token");
        this.props.addToCartAction(itemID, token);
    };
 
    componentDidMount = () => {
        let pathname = window.location.pathname;
        let ID = pathname.slice(pathname.lastIndexOf("/")+1, pathname.length);
        this.props.getItemDetails(ID);
    }

    render() {
        if(this.props.itemDetails) {
            console.log(this.props.itemDetails);
        }
        return (
            <Fragment>
                <button onClick={this.addToCart} className={"checkoutBtn center btn"}>checkout</button>
                <div>
                    {this.props.addToCartConfirmation ? this.props.addToCartConfirmation: "" }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        itemDetails: state.itemDetailsReducer.itemDetails,
        addToCartConfirmation: state.addToCartReducer.cartConfirmation
    }
}

export default connect(mapStateToProps, {
    getItemDetails,
    addToCartAction
})(ItemDetails)