import React, {Component, Fragment} from "react";
import Form from "../../helpers/forms"
import {Field, reduxForm} from 'redux-form';
// import {} from "../../../actions"


class SignUpValidation extends Component {

    signUserIn = () => {
        this.setState({
            hasAttempted: true
        })
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <Fragment>
                <form onSubmit={handleSubmit(this.signUserIn)}>
                    <div>
                        <Field name={"Email"} label={"Email"} component={Form}/>
                    </div>
                    <div>
                        <Field name={"Password"} label={"Password"} type={"Password"} component={Form}/>
                    </div>
                    <div>
                        <Field name={"Confirm"} label={"Confirm Password"} type={"Password"} component={Form}/>
                    </div>
                    <div className={"row center"}>
                        <div className={"col s6"}>
                            <button type={"button"} onClick={this.props.reset} className={"btn red"}>clear</button>
                        </div>
                        <div className={"col s6"}>
                            <button className={"btn textColor"}>Sign In</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }
}

function validate({Email, Password, Confirm}) {
    let errors = {};

    if (!Email) {
        errors.Email = "Please Enter A Valid Email"
    }

    if (!Password) {
        errors.Password = "Please Enter A Valid Password"
    }

    if(!Confirm) {
        errors.Confirm = "Must Enter Valid Password"
    } else if(Confirm !== Password) {
        errors.Confirm = "Must Match Password Above"
    }

    return errors
}


export default reduxForm({
    form: "sign-in-form",
    validate
})(SignUpValidation);