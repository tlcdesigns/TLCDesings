import React, {Component, Fragment} from "react";
import {connect} from "react-redux"
import {getItemDetails} from "../../actions/getItemDetails"


class ItemDetails extends Component {

    addToCart = () => {
        let pathname = window.location.pathname;
        let ID = pathname.slice(pathname.lastIndexOf("/")+1, pathname.length);
        this.props.getItemDetails(ID)
    }

    render() {
        if(this.props.itemDetails) {
            console.log(this.props.itemDetails);
        }
        return (
            <Fragment>
                <button onClick={this.addToCart} className={"checkoutBtn center btn"}>checkout</button>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        itemDetails: state.itemDetailsReducer.itemDetails
    }
}

export default connect(mapStateToProps, {
    getItemDetails
})(ItemDetails)