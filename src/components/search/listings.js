import React from 'react';
import topaz from '../search/images/topaz_necklace.jpg'


export default props => {
    const {title, description, price} = props.about
    return (
        <div className="searchContainer col l3 m3 s6">
            <div className="card">
                <div className="card-image center-align">
                    <img src={topaz} alt=""/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <h1>{`$${price}`}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


