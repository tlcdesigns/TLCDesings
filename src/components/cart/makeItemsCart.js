import React, {Component, Fragment} from "react";
import topaz from '../search/images/topaz_necklace.jpg';


class MakeCartItems extends Component {

    componentDidMount = () => {
        debugger;
        const {price, quantity} = this.props.about;
        this.generateSubTotal(price, quantity);
    }

    generateSubTotal = (price, quantity) => {
        debugger;
        let total = Math.ceil(price) * quantity;
        this.props.updateFunction(total);
        this.props.updateTax();
        return total.toFixed(2);
    }

    ItemTotal = (price, quantity) => {
        let total = Math.ceil(price) * quantity;
        return total.toFixed(2);
    }

    render() {
        const {description, image, price, quantity} = this.props.about;
        return (
            <div id="listItemContainer" className="listItemContainer col s12 m12 l12">
                <div className='listItem'>
                    <div className='itemImageContainer col s12'>
                        <div className={"col imgAndDesc s6"}>
                            <img className='col itemImage' src={topaz}/>
                            <div className={"full"}>{description}</div>
                        </div>
                        <div className={"detailsContainer"}>
                            <div className={"col full pricePosition s2"}>{price}</div>
                            <div className={"col full quantity center s2"}>{quantity}</div>
                            <div className={"col full center totalCard s2"}>{this.ItemTotal(price, quantity)}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MakeCartItems;
