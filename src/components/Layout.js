import React from "react";

import Header from "./Header";
import Content from "./Content";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <Content />
      </div>
    );
  }
}
