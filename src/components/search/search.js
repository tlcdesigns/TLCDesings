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

// class Search extends Component{

// getListingData = (results) => {
//     const listItems = results.map((item,index)=>{
//         return(
//             <ListItem key={index} about={item}/>
//         )
//     });
//     return listItems
// }
// const listings = dummy.map((item,index)=>{
//     return (
//         <ListItem key={index} about={item}/>
//     )
// });


// render() {
// let listings = this.getListingData()
//         return (
//             <div>
//                 <h1 className="center">Search Page</h1>
//                 <ListItem/>
//                 <div>{listings}</div>
//             </div>
//         )
//     }
// }


