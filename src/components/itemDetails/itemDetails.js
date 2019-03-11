import React, {Component} from "react";

class ItemDetails extends Component {
   
    render() {
        // const {Title, Description, image, price} = props.about
        return (
            <div>
                    <div>Item Details</div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Add To Cart<i class="material-icons right">send</i></button>
                    {/* <p>{Title}</p>
                    <p>{Description}</p>
                    <h1>{price}</h1> */}
            </div>
            
        )
    }
}

export default ItemDetails