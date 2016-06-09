import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "./HelloWorld.css";
import AppActions from "../../Actions/app-actions";

class HelloWorld extends Component {
  render() {
    return (
      <div styleName="color">
        <h1
          onClick={AppActions.addItem.bind(null, "this is the add item")}
        >
          Hello Venkat, This is a full blown component created by you and served by GitHub pages
          <br/> Thanks.
        </h1>
      </div>
    );
  }
}

export default cssModules(HelloWorld, styles);
