import React, {Component} from "react";
import ListItem from './listings';
import dummy from '../bummyData/dummy'

class Search extends Component {

    routeToDetailsPage = () => {
        this.props.history.push("/itemDetails");
    }

    render() {
        const listings = dummy.map((item,index)=>{
            return (
                <ListItem key={index} about={item}/>
            )
        });
        return (
            <div className={"row"}>
                <div className={"col s2 filterContainer"}>filter section</div>
                <div className={"col listingContainer"} onClick={this.routeToDetailsPage}>{listings}</div> {/*add media queries to this dont add grid system*/}
            </div>
        )
    }
 }
 export default Search

