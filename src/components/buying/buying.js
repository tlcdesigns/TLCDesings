import React, {Component} from "react";


class Buying extends Component {
    state = {
        value: "United States"
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div className={"infoContainer row"}>
                <form>
                    <div className="shippingContainer">
                        <h5 className="center">Shipping Details</h5>

                        <div className={"countryContainer s10 col"}>
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

                        <div className={"fullNameContainer s10 col"}>
                            <label htmlFor={"fullNameInput"} className="fullName">fullName</label>
                            <input name={"fullNameInput"} id={"fullNameInput"} type="text"/>
                            <p className={"error"}></p>
                        </div>

                        <div className={"adressContainer s10 col"}>
                            <label htmlFor={"addressInput"} className={"address"}>address</label>
                            <input name={"addressInput"} id={"addressInput"} type="text"/>
                            <p className={"error"}></p>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Buying