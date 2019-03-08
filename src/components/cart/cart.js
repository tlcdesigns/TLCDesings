import React, {Component, Fragment} from "react";


class Cart extends Component {
    render() {
        return (
            <Fragment>
                <div className={"pageContainer row"}>
                    <div className={"col itemsContainer s8 "}>
                        <div className="infoHeader col s12">
                            <div className="items col s6">Items(10 items)</div>
                            <div className="header col s2">Price</div>
                            <div className="header col s2">Quantity</div>
                            <div className="header total col s2">Total</div>
                        </div>
                        <div className="itemCards">ITEMS BOUGHT GO HERE</div>
                    </div>
                    <div className="col paySection s4">
                        <div className={"linkPayPal"}>
                            <div></div>
                        </div>
                        <div className={"priceContainer"}>
                            <div className="orderSummary">Order Summary</div>
                            <div className={"subTotal"}>
                                <div className="subTotalText col s10 m9">Subtotal: (10 items)</div>
                                <div className="price col s3 m3">price</div>
                            </div>
                            <div className={"EstimatedShipping"}>
                                <div className="EstimatedShippingText col s10 m9">Estimated Shipping</div>
                                <div className="price col s3 m3">price</div>
                            </div>
                            <div className={"EstimatedTax"}>
                                <div className="EstimatedTaxText col s10 m9">Estimated Tax</div>
                                <div className="price col s2 m3">price</div>
                            </div>
                        </div>
                        <div className="orderTotalBtn">
                            <div className="orderTotal col s9">Order Total:</div>
                            <div className="col price s3">price</div>
                            <div className={"center"}>
                                <button className={"checkoutBtn center btn green"}>Proceed to checkout</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Cart