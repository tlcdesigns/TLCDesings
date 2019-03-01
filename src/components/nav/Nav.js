import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Sidenav from "./side-nav";
import {Link} from "react-router-dom"


class Nav extends Component {
    state = {
        common: [
            {
                text: "Landing",
                top: "/"
            },
            {
                text: "Search",
                to: "/Search"
            }
        ],
        Auth: [
            {
                text: "Buying",
                top: "/buying"
            },
            {
                text: "Cart",
                to: "/Cart"
            },
            {
                text: "Profile",
                to: "/UserProfile"
            }
        ],
        noAuth: [
            {
                text: "Sign In",
                to: "/SignIn"
            },
            {
                text: "Sign Up",
                to: "/SignUp"
            }
        ],
        links: ""
    };

    componentDidMount() {
        M.Sidenav.init(this.navRef);
    }

    buildLinkForNav (link) {
        return (
            <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        )
    }

    handleSignOut = () => {
        this.props.signOutAction();
    };

    getLinksInMenu = () => {
        let auth = true;
        const {common, Auth, noAuth} = this.state;
        let token = localStorage.getItem("token");
        let links = [...common];
        if (auth || token) {
            links = [...common, ...Auth].map(this.buildLinkForNav);
            links.push(
                <li key={"sign-out"} className={"sign-out center"}>
                    <button onClick={this.handleSignOut} className={"btn blue"}>Sign Out</button>
                </li>
            )
        } else {
            links = [...common, ...noAuth].map(this.buildLinkForNav)
        }
        return links
    };

    render() {
        const links = this.getLinksInMenu();
        return (
            <Fragment>
                <nav>
                    <a href={"#"} data-target="side-nav" className={"sidenav-trigger"}>
                        <i className={'material-icons'}>menu</i>
                    </a>
                    <ul className={"right hide-on-med-and-down"}>
                        {links}
                    </ul>
                </nav>
                <Sidenav links={links}/>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {

})(Nav)