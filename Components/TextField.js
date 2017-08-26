import React, { Component} from "react";
import {TextField} from "material-ui";

class TextFieldExample extends Component {
    constructor() {
        super();
        this.state = {
            value: 0
        };
    }

    setNewValueToState(e, v) {
        this.setState({
            value: v
        });
    }

    render() {
        return (
        <TextField
            floatingLabelText="Hint Text"
            floatingLabelFixed={true}
            value={this.state.value}
            type="number"
            onChange={this.setNewValueToState.bind(this)}
        />);
    }
}

export default TextFieldExample;
