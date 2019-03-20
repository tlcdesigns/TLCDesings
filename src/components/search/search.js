import React, {Component} from "react";
import {connect} from "react-redux";
import ListItem from './listings';
import dummy from '../bummyData/dummy';
import {getAllProducts} from "../../actions/getAllProducts"


class Search extends Component {
    componentDidMount = () => {
        this.props.getAllProducts();
    }

    render() {
        if(this.props.allProducts) {
            var listings = this.props.allProducts.map((item,index)=>{
                return (
                    <ListItem key={index} about={item}/>
                )
            });
        }
        return (
            <div className={"row"}>
                <div className={"col s2 filterContainer"}>filter section
                    <div>
                        {/* <label htmlFor="priceMin">Price</label> */}
                        <p>Price</p>
                        <input id="priceMin" className="col s6" placeholder="min" type="text"/>
                        <input className="col s6" placeholder="max" type="text"/>
                    </div>
                    <div>
                        <input placeholder="Search" type="text"/>
                    </div>
                </div>
                <div className={"col listingContainer"}>{listings}</div> {/*add media queries to this dont add grid system*/}
            </div>
        )
    }
 }
 function mapStateToProps(state) {
    return {
        allProducts: state.allProductsReducer.allProducts
    }
 }

 export default connect(mapStateToProps, {
     getAllProducts
 })(Search)

