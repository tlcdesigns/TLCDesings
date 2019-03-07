import React, {Component} from "react";
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import SignUpValidation from "./validateSignUp"
import {signUserUp} from "../../../actions/signUpAction"


class SignUp extends Component {
    state = {
        hasAttempted: false
    }

    signUpUser = (values) => {
        this.setState({
            hasAttempted: true
        })
        this.props.signUserUp(values)
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
            //route user
        } else {
            localStorage.removeItem("token");
        }
    }

    render() {
        const {hasAttempted} = this.state;
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <SignUpValidation formSubmitFunction={this.signUpUser}/>
                <p>{this.props.message && hasAttempted ? this.props.message : ""}</p>
                <p className="col center-align l12 m12 s12">Already Have An Account? <Link className='textColor' to={"/SignIn"}>Sign In! </Link> </p>
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
    signUserUp
})(SignUp)