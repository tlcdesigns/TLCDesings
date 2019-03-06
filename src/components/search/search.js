import React, {Component} from "react";
import ListItem from './listings';
import dummy from '../bummyData/dummy'

class Search extends Component {

    render() {
        const listings = dummy.map((item,index)=>{
            return (
                <ListItem key={index} about={item}/>
            )
        });
        return (
            <div>
                <h1 className="center">Search Page</h1>
                {/* <ListItem/> */}
                <div>{listings}</div>
            </div>
        )
    }
 }
 export default Search