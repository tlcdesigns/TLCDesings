import React, {Component, Fragment} from "react";
import Form from "../../helpers/forms"
import {Field, reduxForm} from 'redux-form';

class SignInValidation extends Component {

    render() {
        const {handleSubmit, submitFunction} = this.props;
        return (
            <Fragment>
                <form onSubmit={handleSubmit(submitFunction)}>
                    <div>
                        <Field name={"Email"} label={"Email"} component={Form}/>
                    </div>
                    <div>
                        <Field name={"Password"} label={"Password"} type={"Password"} component={Form}/>
                    </div>
                    <div className={"row center"}>
                        <div className={"col s6"}>
                            <button type={"button"} onClick={this.props.reset} className={"btn red"}>clear</button>
                        </div>
                        <div className={"col s6"}>
                            <button className={"btn navColor"}>Sign In</button>
                        </div>
                    </div>
                    <p></p>
                </form>
            </Fragment>
        )
    }
}

function validate({Email, Password}) {
    let errors = {};

    if (!Email) {
        errors.Email = "Please Enter A Valid Email"
    }

    if (!Password) {
        errors.Password = "Please Enter A Valid Password"
    }

    return errors
}


export default reduxForm({
    form: "sign-in-form",
    validate
})(SignInValidation);