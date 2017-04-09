import React, { Component } from 'react';
import { Segment, Grid, Advertisement } from 'semantic-ui-react';
import architecture from './images/architecture.jpg';
export default class Home extends Component {
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
        fontSize: "10em",
        color: "#000080",
        marginTop: "0.25em"
      },
      tagline: {
        fontSize: "1.5em",
        padding: "0.2em",
        marginTop: "1.5em",
        color: "#fff"
      },
      info: {
        fontSize: "1.9em",
        lineHeight: "1.9em",
        color: "#000",
        padding: "0.5em",
        marginTop: "1.5em"
      },
      spanAll: {
        width: "100%",
        height: "424px",
        background: "url(" + architecture + ")",
        webkitBackgroundSize: "cover",
        backgroundSize: "cover"
      },
      transparentBg: {
        background: "rgba(255,255,255,0.8)",
        padding: "1.8em"
      }
    }
    return(
      <div style={styles.transparentBg}>
        <Grid columns={2} className="row-styles">
          <Grid.Row className="row-styles">
            <Grid.Column style={styles.section}>
              <i className="fa fa-lock" />
              <br />
              <h1>Security</h1>
            </Grid.Column>
            <Grid.Column style={styles.info}>
              Have confidence that every transaction is anonymous but recorded immutably
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="row-styles">
            <Grid.Column style={styles.info}>
              Set up payments for shared contracts, and housing arrangements
            </Grid.Column>
            <Grid.Column style={styles.section}>
              <i className="fa fa-credit-card" />
              <br />
              <h1>Transactions</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="row-styles">
            <Grid.Column style={styles.section}>
              <i className="fa fa-link" />
              <br />
              <h1>Chain of Trust</h1>
            </Grid.Column>
            <Grid.Column style={styles.info}>
              Establish a chain of trust for all parties involved regarding future payments
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
