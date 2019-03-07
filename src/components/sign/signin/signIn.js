import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import SignInValidation from "./validateSignIn"
import {signInAction} from "../../../actions/signInAction"


class SignIn extends Component {
    state = {
        hasAttempted: false
    }

    componentDidMount = () => {
        if(this.props.token) {
            // route user
        }
    }

    componentDidUpdate = () => {
        debugger;
        if(this.props.token) {
            localStorage.setItem("token", this.props.token);
        } else {
            localStorage.removeItem("token");
        }
    }

    signUserIn = async (values) => {
        this.setState({
            hasAttempted: true
        });
        await this.props.signInAction(values);
    }

    render() {
        const {hasAttempted} = this.state;
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <SignInValidation submitFunction={this.signUserIn}/>
                <p>{this.props.message && hasAttempted ? this.props.message : ""}</p>
                <p className="col center-align l12 m12 s12">Don't have an account? <Link className='textColor' to={"/SignUp"}>Sign up now! </Link> </p>
            </div>
        )
    }
}

function mapStateTopRPops(state) {
    return {
        token: state.loggedinReducer.token,
        message: state.loggedinReducer.message
    }
}

export default connect(mapStateTopRPops, {
    signInAction
})(SignIn)