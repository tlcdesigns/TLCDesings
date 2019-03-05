import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import SignInValidation from "./validateSignIn"
import {signInAction} from "../../../actions/signInAction"


class SignIn extends Component {
    state = {
        hasAttempted: false
    }

    signUserIn = (values) => {
        debugger;
        this.setState({
            hasAttempted: true
        });
        this.props.signInAction(values);
    }

    render() {
        const {hasAttempted} = this.state;
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <SignInValidation submitFunction={this.signUserIn}/>
                <p>{this.props.message && hasAttempted ? this.props.message : ""}</p>
                <p className="col center-align l12 m12 s12">Dont have an account? <Link className='textColor' to={"/SignUp"}>Sign up now! </Link> </p>
            </div>
        )
    }
}

function mapStateTopRPops(state) {
    return {

    }
}

export default connect(mapStateTopRPops, {
    signInAction
})(SignIn)