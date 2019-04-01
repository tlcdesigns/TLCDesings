import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Field} from "redux-form";
import Forms from "../helpers/forms";
import {getItemDetails} from "../../actions/getItemDetails"
import {addToCartAction} from "../../actions/addToCartAction"


class ItemDetails extends Component {

    state = {
        buttonClicked: false,
    }

    addToCart = () => {
        this.setState({
            buttonClicked: true
        })
        let pathname = window.location.pathname;
        let itemID = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);
        let token = localStorage.getItem("token");
        this.props.addToCartAction(itemID, token);
    };

    componentDidMount = () => {
        let pathname = window.location.pathname;
        let ID = pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length);
        this.props.getItemDetails(ID);
    }

    render() {
        if (this.props.itemDetails) {
            console.log(this.props.itemDetails);
        }
        return (
            <Fragment>
                <div className={"pageContainer row"}>


                    <div className={"buyingContainer  col s5"}>
                        <div className={"starCount"}>stars (amount)</div>
                        <div
                            className={"descContainer"}>{this.props.itemDetails ? this.props.itemDetails.title : ""}</div>
                        <div className={"colorDropdownContainer"}>
                            <label htmlFor="colorDropdown">Primary Color</label>
                            <select name="colorDropdown" id="colorDropdown">
                                <option value="Blue">Blue</option>
                            </select>
                        </div>
                        <div className={"colorDropdownContainer2"}>
                            <label htmlFor="colorDropdown2">Secondary Color</label>
                            <select name="colorDropdown2" id="colorDropdown2">
                                <option value="Red">Red</option>
                            </select>
                        </div>
                        <div className={"col s12 rowContainer"}>
                            <div className={"col 3 quantityContainer"}>
                                <label htmlFor="quantityDropDown">Quantity</label>
                                <select name="quantityDropDown" id="quantityDropDown">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="col s12 addToCartContainer">
                            <button onClick={this.addToCart} className={"col s12 checkoutBtn center btn"}>Add Item(s) To Cart</button>
                        </div>
                        <div>
                            {this.props.addToCartConfirmation && this.state.buttonClicked ? this.props.addToCartConfirmation : ""}
                        </div>
                    </div>
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