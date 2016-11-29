import React, {Component} from "react";
import cssModules from "react-css-modules";
import styles from "./HelloWorld.css";

class HelloWorld extends Component {
  render() {
    return (
      <div styleName="color">
        <h1 styleName="textColor">Hello Venkat, This is a full blown component created by you and served by GitHub pages
          <br/> Thanks.</h1>
      </div>
    );
  }
}

export default cssModules(HelloWorld, styles);
