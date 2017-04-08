import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Menu from '../../components/Menu'
import logo from './images/logo.png';
import chain from './images/chain.png';
export default class Home extends Component {
  render() {
    const styles = {
      img: {
        width: "5em",
        margin: "0 auto"
      },
      logoheader: {
        fontSize: "5em",
        fontFamily: "Courier New, sans-serif",
        fontWeight: "light",
        color: "#c0c0c0"
      },
      chain: {
        margin: "0 auto",
        width: "30%"
      }
    }
    return(
      <div className="container">
      <img src={logo} alt="logo" style={styles.img} /><span style={styles.logoheader}>block</span><br />
      <Menu />
      </div>
    )
  }
}
