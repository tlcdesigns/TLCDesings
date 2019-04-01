import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {getCartItemsAction} from "../../actions/getCartItemsAction";
import MakeCartItem from "./makeItemsCart";
import {getUserIDAction} from "../../actions/getUserIDAction";

class Cart extends Component {

    state = {
        subtotal: 0,
        tax: 0,
        shippingCost: 0,
        total : 0
    }

    componentDidMount = () => {
        let token = localStorage.getItem("token");
        this.props.getCartItemsAction(token);
        this.props.getUserIDAction(token);
    }

    sendToBuyingPage = () => {
        this.props.history.push(`/buying/${this.props.userID}`);
    }

    updateSubtotal = (total) => {
        this.setState({
            subtotal: this.state.subtotal += total
        })
    };

    // getTax = () => {
    //     this.setState({
    //         tax: this.state.subtotal * .0025
    //     });
    // }

    updateTotalOrder = () => {
        debugger;
        const {subtotal, tax, shippingCost} = this.state;
        let totalCost = 0;
        totalCost = (subtotal + (subtotal * .0025)) + shippingCost;
        this.setState({
            total: totalCost
        });
    };


    render() {
        if(this.props.cartItems) {
            var listings = this.props.cartItems.map((item, index) => {
                return (
                    <MakeCartItem updateTotal={this.updateTotalOrder} updateTax={this.getTax} updateFunction={this.updateSubtotal} key={index} about={item}/>
                )
            });
        }
        return (
            <Fragment>
                <div className={"pageContainer row"}>
                    <div className={"col itemsContainer s8 "}>
                        <div className="infoHeader col s12">
                            <div className="items col s6">{this.props.cartItems ?  `Items(${this.props.cartItems.length})` : 'Items(0)'}</div>
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
                                <div className="price col s3">{"$" + this.state.subtotal.toFixed(2)}</div>
                            </div>
                            <div className={"EstimatedShipping"}>
                                <div className="EstimatedShippingText col s10 m9">Estimated Shipping</div>
                                <div className="price col s3">{"$" + this.state.shippingCost.toFixed(2)}</div>
                            </div>
                            <div className={"EstimatedTax"}>
                                <div className="EstimatedTaxText col s10 m9">Estimated Tax</div>
                                <div className="price col s2">{"$" + (this.state.subtotal * .0025).toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="orderTotalBtn">
                            <div className="orderTotal col s9">Order Total:</div>
                            <div className="col price s3">{"$" + this.state.total.toFixed(2)}</div>
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