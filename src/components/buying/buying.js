import React, {Component, Fragment} from "react";
import {reduxForm} from 'redux-form';


class Buying extends Component {
    state = {
        value: "United States",
        firstStep: true,
        showInput: false
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    submitFunction = () => {
        this.setState({
            firstStep: false
        })
    };

    showInput = () => {
        this.setState({
            showInput: !this.state.showInput
        })
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <Fragment>
                <div className={"container"}>
                    <div className={this.state.firstStep ? "" : "hide"}>
                        <form onSubmit={handleSubmit(this.submitFunction)}>
                            <div className={"infoContainer row"}>
                                <div className="shippingContainer">
                                    <h5 className="center">Shipping Details</h5>

                                    <div className={"countryContainer offset-s1 s10 col"}>
                                        <label className="Country">Country</label>
                                        <div className={"dropDownContainer"}>
                                            <select value={this.state.value} onChange={this.handleChange}>
                                                <option value="1">United States</option>
                                                <option value="2">Canada</option>
                                                <option value="3">Mexico</option>
                                            </select>
                                            <div className={"error"}></div>
                                        </div>
                                    </div>

                                    <div className={"fullNameContainer offset-s1 s10 col"}>
                                        <label htmlFor={"fullNameInput"} className="fullName">Full Name</label>
                                        <input name={"fullNameInput"} id={"fullNameInput"} type="text"/>
                                        <p className={"error"}></p>
                                    </div>

                                    <div className={"adressContainer offset-s1 s10 col"}>
                                        <label htmlFor={"addressInput"} className={"address"}>Street Address</label>
                                        <input name={"addressInput"} id={"addressInput"} type="text"/>
                                        <p className={"error"}></p>
                                    </div>

                                    <div className={"s10 offset-s1 col apt"}>
                                        <label htmlFor="aptInput">Apt / Suite / Other optional</label>
                                        <input name={"aptInput"} id={"aptInput"} type="text"/>
                                        <p className="error"></p>
                                    </div>

                                    <div className="s12 zipAndCity">
                                        <div className="col offset-s1 s5 zip">
                                            <label htmlFor="zipInput">Zip Code</label>
                                            <input id={"zipInput"} type="text"/>
                                            <p className="error"></p>
                                        </div>
                                        <div>
                                            <div className="col  s5 city">
                                                <label htmlFor="cityInput">City</label>
                                                <input id={"cityInput"} type="text"/>
                                                <p className={"error"}></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col offset-s1 s10 stateContainer">
                                        <label htmlFor="stateInput">State</label>
                                        <input id={"stateInput"} type="text"/>
                                        <p className="error"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row buttonContainer">
                                <button className={"col s12 btn"}>Continue To Payment</button>
                            </div>
                        </form>
                    </div>


                    <div className={this.state.firstStep ? "hide" : ""}>
                        <h3>Choose a payment method</h3>
                        <div>Order Will Be Sent And The Purchase Will Be Finalized Once Submitted.</div>
                        <div className="cardContainer row">
                            <div className={"containerHeader"}>
                                <span className={"cardSpan"}>Credit Card</span>
                            </div>
                            <div className={"nameOnCardContainer offset-s1 s10 col"}>
                                <label htmlFor="cardNameInput">Name On Card</label>
                                <input id={"cardNameInput"} type="text"/>
                                <p className="error"></p>
                            </div>
                            <div className={"offset-s1 s10 col CardNumberContainer"}>
                                <label htmlFor="cardNumberInput">Card Number</label>
                                <input id={"cardNumberInput"} type="text"/>
                                <p className="error"></p>
                            </div>
                            <div className={"cardMetaData offset-s1 s10 col"}>
                                <div className="s2 col month">
                                    <select name="monthDropDown" id="monthDropDown">
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
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col s3 year">
                                    <select name="yearDropDown" id="yearDropDown">
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                        <option value="2033">2033</option>
                                        <option value="2034">2034</option>
                                        <option value="2035">2035</option>
                                        <option value="2036">2036</option>
                                        <option value="2037">2037</option>
                                        <option value="2038">2038</option>
                                        <option value="2039">2039</option>
                                    </select>
                                </div>
                                <div className="securityCode offset-s2 col s4">
                                    <label htmlFor="codeInput">Security Code</label>
                                    <input id={"codeInput"} type="password"/>
                                    <p className="errCode error"></p>
                                </div>
                            </div>
                            <div className="border col s12"></div>
                            <div className="center redeem">
                                <div onClick={this.showInput} className="linkDiv col s12">Click Here To Redeem Any Gift
                                    Cards Or Offer Codes
                                </div>
                                <div className={this.state.showInput ? "col s12" : "col s12 hide"}>
                                    <input placeholder={"Enter Code"} type="text" className="col s9"/>
                                    <button className={"btn"}>Apply</button>
                                </div>
                            </div>
                        </div>
                        <div className={"center col s12"}>
                            <button className={"btn"}>Place Your Order</button>
                        </div>
                    </div>
                </div>


            </Fragment>
        )
    }
}

function validate({fullNameInput, addressInput, aptInput, zipInput, cityInput, stateInput}) {
    debugger;
    const errors = {};

    if (!fullNameInput) {
        errors.fullNameInput = "Inavlaid whatever"
    }

    if (!addressInput) {
        errors.addressInput = "Inavlaid whatever"
    }

    if (!aptInput) {
        errors.aptInput = "Inavlaid whatever"
    }

    if (!zipInput) {
        errors.zipInput = "Inavlaid whatever"
    }

    if (!cityInput) {
        errors.cityInput = "Inavlaid whatever"
    }
    if (!stateInput) {
        errors.stateInput = "Inavlaid whatever"
    }


    return (
        errors
    )
}

export default reduxForm({
    form: "buyingPage",
    validate
})(Buying)