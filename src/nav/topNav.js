import React, {Component} from "react";


class Nav extends Component {
    state = {
        common: [
            {
                text: "Landing",
                top: "/"
            }
        ],
        Auth: [
            {
                text: "Buying",
                top: "/buying"
            }
        ],
        noAuth: [
            {}
        ],
        links: ""
    };


    render() {
        return (
            <div></div>
        )
    }
}