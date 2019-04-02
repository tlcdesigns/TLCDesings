import React, {Component, Fragment} from 'react';
import topaz from '../search/images/topaz_necklace.jpg';





class CarouselItem extends Component {

    render() {
        // const userImages = this.props.images.map((item, index) => {
            return(
                <a className="carousel-item responsive-img" id="book-item" href="#two!">
                    <img src={topaz}/>
                </a>
            )
        // });




        return (
            <Fragment>
                {userImages || ''}
            </Fragment>
        )
    }

}

export default CarouselItem;