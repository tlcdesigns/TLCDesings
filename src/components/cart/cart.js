import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
// import dummy from '../bummyData/dummy';
import {getCartItemsAction} from "../../actions/getCartItemsAction";
import MakeCartItem from "./makeItemsCart";
import {getUserIDAction} from "../../actions/getUserIDAction";

class Cart extends Component {

    componentDidMount = () => {
        let token = localStorage.getItem("token");
        this.props.getCartItemsAction(token);
        this.props.getUserIDAction(token);
    }

    sendToBuyingPage = () => {
        this.props.history.push(`/buying/${this.props.userID}`);
    }


    render() {
        if(this.props.cartItems) {
            var listings = this.props.cartItems.map((item, index) => {
                return (
                    <MakeCartItem key={index} about={item}/>
                )
            });
        }
        return (
            <Fragment>
                <div className={"pageContainer row"}>
                    <div className={"col itemsContainer s8 "}>
                        <div className="infoHeader col s12">
                            <div className="items col s6">{this.props.cartItems ?  `Items(${this.props.cartItems.length} items)` : 'Items(0 items)'}</div>
                            <div className="header col s2">Price</div>
                            <div className="header col s2">Quantity</div>
                            <div className="header total center col s2">Total</div>
                        </div>
                        <div className="itemCards">{listings}</div>
                    </div>
                    <div className="col paySection s4">
                        <div className={"linkPayPal"}>
                            <div></div>
                        </div>
                        <div className={"priceContainer"}>
                            <div className="orderSummary">Order Summary</div>
                            <div className={"subTotal"}>
                                <div className="subTotalText col s10 m9">Subtotal (10 items)</div>
                                <div className="price col s3">price</div>
                            </div>
                            <div className={"EstimatedShipping"}>
                                <div className="EstimatedShippingText col s10 m9">Estimated Shipping</div>
                                <div className="price col s3">price</div>
                            </div>
                            <div className={"EstimatedTax"}>
                                <div className="EstimatedTaxText col s10 m9">Estimated Tax</div>
                                <div className="price col s2">price</div>
                            </div>
                        </div>
                        <div className="orderTotalBtn">
                            <div className="orderTotal col s9">Order Total:</div>
                            <div className="col price s3">price</div>
                            <div className={"center"}>
                                <button onClick={this.sendToBuyingPage} className={"checkoutBtn center btn"}>checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        cartItems: state.getCartItemsReducer.cartItems,
        userID: state.getUserIDReducer.userID
    }
}


export default connect(mapStateToProps, {
    getCartItemsAction,
    getUserIDAction
})(Cart)