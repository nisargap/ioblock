import React, { Component } from 'react';
import Menu from './Menu';
import logo from './logo.png';
export default class Header extends Component {
  render() {
    const styles = {
      img: {
        width: "5em",
        margin: "0 auto"
      },
      logoheader: {
        fontSize: "5em",
        fontWeight: "light"
      },
      chain: {
        margin: "0 auto",
        width: "30%"
      },
      section: {
        fontSize: "6em",
        padding: "0.4em",
        color: "#000080"
      },
      tagline: {
        fontSize: "1.5em",
        padding: "0.2em",
        marginTop: "1.5em",
        color: "#000"
      },
      info: {
        fontSize: "1.5em",
        lineHeight: "1.9em",
        color: "#888"
      }
    }
    return (
      <div className="container">
      <img src={logo} alt="logo" style={styles.img} /><span style={styles.logoheader}>block</span><br /><br />
      <span style={styles.tagline}>Trust <i className="fa fa-home" /> <i className="fa fa-users" /> payments</span>
      <Menu type="loggedOut" />
      {this.props.children}
      </div>
    )
  }
}
