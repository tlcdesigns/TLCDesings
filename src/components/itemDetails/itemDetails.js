import React, {Component} from "react";

class ItemDetails extends Component {
   
    render() {
        const {Title, Description, image, price} = props.about
        return (
            <div>
                    <div>Item Details</div>
                    <h1>{Title}</h1>
                    <p>{Description}</p>
                    <h1>{price}</h1>
            </div>
            
        )
    }
}

export default ItemDetails