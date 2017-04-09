import React, { Component } from 'react';
import Menu from './Menu';
export default class Header extends Component {
  render() {
    return (
      <div>
      <Menu type="loggedOut" />
      {this.props.children}
      </div>
    )
  }
}
