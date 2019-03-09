import React from 'react';



export default props => {
    const {Title, Description, image, price} = props.about
    return (
        // <div className="row">
        //     <div className="col l4 m6 s12">
        //         <h1>{Description}</h1>
        //         <img src={image} alt=""/>
        //         <h1>{price}</h1>
        //         <h1>{Quantity}</h1>
        //     </div>
        // </div>
        // <div className="row">
            <div className="searchContainer col l3 m6 s6">
                <div className="card">
                    <div className="card-image center-align">
                        <img src={image} alt=""/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h1>{Title}</h1>
                            <p>{Description}</p>
                            <h1>{price}</h1>
                        </div>
                    </div>  
                </div>  
            </div>
        // </div>

    )
}


// class ListItem extends Component{
//     render(){
//         return (
//             <div className="row">
//                 <div className="col l4 m4 s2">
//                     <h1>Description</h1>
//                     <h1>image</h1>
//                     <h1>Price</h1>
//                     <h1>Quantity</h1>
//                 </div>
//             </div>
//         )
//     }
    
// }


// export default ListItem

