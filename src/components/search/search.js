import React, {Component} from "react";
import {connect} from "react-redux";
import ListItem from './listings';
import dummy from '../bummyData/dummy';
import {getAllProducts} from "../../actions/getAllProducts"


class Search extends Component {

    routeToDetailsPage = () => {
        this.props.history.push("/itemDetails");
    }

    componentDidMount = () => {
        this.props.getAllProducts();
    }

    // componentDidUpdate = () => {
    //     if(this.props.getAllProducts) {
    //         const listings = this.props.getAllProducts.map((item,index)=>{
    //             return (
    //                 <ListItem key={index} about={item}/>
    //             )
    //         });
    //     }
    // }

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
                <div className={"col s2 filterContainer"}>filter section</div>
                <div className={"col listingContainer"} onClick={this.routeToDetailsPage}>{listings}</div> {/*add media queries to this dont add grid system*/}
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

