import React, {Fragment} from "react";

export default props => {
    debugger;
    const {description, image, price, quantity} = props.about;
    return (
        <div id="listItemContainer" className="listItemContainer col s12 m12 l12">
            <div className='listItem'>
                <div className='itemImageContainer col s12'>
                    <div className={"col imgAndDesc s6"}>
                        <img className='col itemImage' src={image}/>
                        <div className={"full"}>{description}</div>
                    </div>
                    <div className={"detailsContainer"}>
                        <div className={"col full pricePosition s2"}>{price}</div>
                        <div className={"col full center s2"}>{quantity}</div>
                        <div className={"col full center totalCard s2"}>{"total"}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//<div id="listItemContainer" className="listItemContainer col s12 m12 l12">
//             <div className='listItem'>
//                 <div className='itemImageContainer col s3'>
//                     <img className=' itemImage' src={image}/>
//                 </div>
//                 <div className="col s3 descriptionContainer">
//                     <p>{Description}</p>
//                 </div>
//                 <div className='col s6 itemDetails'>
//                     <div className={"details col s5"}>
//                         <p>{price}</p>
//                     </div>
//                     <div className={"details quantityContainer col s4"}>
//                         <p>{Quantity}</p>
//                     </div>
//                     <div className={"details totalContainer col s3"}>
//                         <p>{"total"}</p>
//                     </div>
//
//                 </div>
//                 <div className='itemPrice'>
//                 </div>
//             </div>
//         </div>