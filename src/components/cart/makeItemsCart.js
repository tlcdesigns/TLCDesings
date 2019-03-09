import React, {Fragment} from "react";

export default props => {
    const {Description, image, price, Quantity} = props.about;
    return (
        <div id="listItemContainer" className="listItemContainer col s12 m12 l12">
            <div className='listItem'>
                <div className='itemImageContainer col s3'>
                    <img className=' itemImage' src={image}/>
                </div>
                <div className="col s3 descriptionContainer">
                    <p>{Description}</p>
                </div>
                <div className='col s6 itemDetails'>
                    <div className={"details col 4"}>
                        <p>{price}</p>
                    </div>
                    <div className={"details col 4"}>
                        <p>{Quantity}</p>
                    </div>
                    <div className={"details col 4"}>
                        <p>{"total"}</p>
                    </div>

                </div>
                <div className='itemPrice'>
                </div>
            </div>
        </div>
    )
}

