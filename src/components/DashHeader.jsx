import React, { Component } from "react";
import Menu from './Menu';
import logo from './logo.png';
export default class DashHeader extends Component {

  render() {
    const styles = {
      img: {
        width: "3em"
      },
      logoheader: {
        fontSize: "3em"
      }
    }
    return (
      <div className="container">
        <img src={logo} alt="logo" style={styles.img} /><span style={styles.logoheader}>block</span><br />
        <Menu type="loggedIn" />
        {this.props.children}
      </div>
    )
  }

}
