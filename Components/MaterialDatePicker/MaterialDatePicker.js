import React, {Component} from "react";
import {DatePicker, TextField} from "material-ui";

class MaterialDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputDate: null
        };
    }

    onDateChange(event, date) {
        console.log("The selected date is...");
        console.log(date);
        this.setState({
            inputDate: date
        });
    }

    render() {
        return (
            <div>
                <div>
                    DatePicker to Test Dates
                </div>
                <div>
                    <DatePicker
                        autoOk={true}
                        mode="landscape"
                        hintText="Select Date"
                        floatingLabelText="Select Date"
                        value={this.state.inputDate}
                        onChange={this.onDateChange.bind(this)}
                    />
                </div>
                <div>
                    {this.state.inputDate ? `The date you selected is ${this.state.inputDate}` : ""}
                </div>
            </div>
        );
    }
}

export default MaterialDatePicker;
