import React, {Component} from "react";
import {reduxForm} from 'redux-form';


class Buying extends Component {
    state = {
        value: "United States",
        firstStep: true
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

    render() {
        const {handleSubmit} = this.props;
        return (
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
                                    <label htmlFor={"fullNameInput"} className="fullName">fullName</label>
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
            </div>

        )
    }
}

function validate() {
    const errors = {};

    return (
        errors
    )
}

export default reduxForm({
    form: "buyingPage",
    validate
})(Buying)