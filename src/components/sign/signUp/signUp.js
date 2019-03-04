import React, {Component} from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import SignUpValidation from "./validateSignUp"


class SignUp extends Component {
    state = {
        hasAttempted: false
    }

    render() {
        const {hasAttempted} = this.state;
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <SignUpValidation formSubmitFunction={this.signUserIn}/>
                <p>{this.props.message && hasAttempted ? this.props.message : ""}</p>
                <p className="col center-align l12 m12 s12">Already Have An Account? <Link className='textColor' to={"/SignIn"}>Sign In! </Link> </p>
            </div>
        )
    }
}

function mapStateTopRPops(state) {
    return {

    }
}

export default connect(mapStateTopRPops, {

})(SignUp)