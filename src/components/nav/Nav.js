import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Sidenav from "./side-nav";
import {Link} from "react-router-dom";
import {signOutAction} from "../../actions/signOutAction";
import temp from "../../assets/images/temp.jpg";


class Nav extends Component {
    state = {
        common: [
            {
                text: "TLC Designs",
                to: "/"
            },
            // {
            //     text: "Landing",
            //     to: "/"
            // },
            {
                text: "Search",
                to: "/"
            }
        ],
        Auth: [
            // {
            //     text: "Buying",
            //     to: "/buying"
            // },
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

    buildLinkForNav(link) {
        return (
            <li key={link.text === "TLC Designs" ? "designs" : link.to}>
                <Link className={link.text === "TLC Designs" ? "designs" : "navColor"} to={link.to}>{link.text}</Link>
            </li>
        )
    }

    // componentDidUpdate = () => {
    //     if()
    // }

    handleSignOut = () => {
        let token = localStorage.getItem('token');
        this.props.signOutAction(token);
    };

    getLinksInMenu = () => {
        let auth = false;
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
                <nav className={"navColor"}>
                    {/*<img className="center tempImg" src={temp}/>*/}
                    {/*<p className={" center-align designs"}>TLC Designs</p>*/}
                    <a href={"#"} data-target="side-nav" className={"sidenav-trigger"}>
                        <i className={'material-icons show-on-small'}>menu</i>
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
        token: localStorage.getItem("token")
    }
}

export default connect(mapStateToProps, {
    signOutAction
})(Nav)