import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import logo from './images/ioblock.png';
export default class Home extends Component {
  render() {
    const styles = {
      logo: {
        width: "100px",
        display: "block",
        textAlign: "center",
        margin: "auto"
      },
      container: {
        marginTop: 0,
        width: "100%",
        margin: "0 auto"
      },
      firstSection: {
        marginTop: 0,
        background: "#f0f0f0",
        padding: "5%",
        width: "100%",
        textAlign: "center",
        border: "0px solid black"
      },
      secondSection: {
        padding: "5%"
      },
      paperInner: {
        padding: "1.5em",
        fontSize: "1.7em"
      }
    }
    return(
      <div>
        <article style={styles.container}>
        <section style={styles.firstSection} id="top">
          <br /><br /><br />
          <img src={logo} style={styles.logo} role="presentation" />
          <br />
          <h1>Make and verify shared transactions</h1>
          <br />
        </section>
        <section style={styles.secondSection} id="middle">
          <Paper style={styles.paperInner}>
            <h1>About</h1>
            <Divider />
            <br />
            <p>IO Block is a service which provides a safe, reliable, and trustworthy channel for shared transactions such as those for real estate or housing situations.</p>
          </Paper>
        </section>
        <section id="bottom">

        </section>
        </article>
      </div>
    )
  }
}
