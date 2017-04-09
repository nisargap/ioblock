import React, { Component } from "react";
import Menu from './Menu';
export default class DashHeader extends Component {

  render() {
    return (
      <div>
        <Menu type="loggedIn" />
        {this.props.children}
      </div>
    )
  }

}
