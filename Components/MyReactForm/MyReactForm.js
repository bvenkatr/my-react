import React, {Component} from "react";
import {TextField, RaisedButton} from "@material-ui/core";

class MyReactForm extends Component {
    constructor(...rest) {
        super(...rest);
        this.state = {
            name: "SampleForm",
            error: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isValidatePhoneNumber(value) {
        return /\d{10,10}/.test(value);
    }

    handleSubmit = event => {
        event.preventDefault();
        const value =
            event.target.elements.username.value
    }
    handleChange = event => {
        const {value} = event.target
    }

    render() {
        const {error} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        hintText={"Enter your name"}
                        onBlur={event => {
                            if (!this.isValidatePhoneNumber(event.target.value)) {
                                this.setState({
                                    numberError: true
                                });
                            } else {
                                this.setState({
                                    numberError: false
                                });
                            }
                        }}
                        errorText={
                            this.state.numberError ? "This is not a valid phone number" : ""
                        }
                    />
                    <RaisedButton
                        label={"Submit"}
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}

export default MyReactForm;
