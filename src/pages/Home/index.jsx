import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
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
        fontSize: "6em",
        padding: "0.4em",
        color: "#000080"
      },
      tagline: {
        fontSize: "1.5em",
        padding: "0.2em",
        marginTop: "1.5em",
        color: "#c0c0c0"
      },
      info: {
        fontSize: "1.5em",
        lineHeight: "1.9em",
        color: "#888"
      }
    }
    return(
      <div>
      <Segment style={styles.section}>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <i className="fa fa-lock" />
              <br />
              <h1>Security</h1>
            </Grid.Column>
            <Grid.Column>
              <i className="fa fa-credit-card" />
                <br />
                <h1>Transactions</h1>
            </Grid.Column>
            <Grid.Column>
              <i className="fa fa-link" />
              <br />
              <h1>Chain of Trust</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={styles.info}>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              Have confidence that every transaction is anonymous but recorded immutably
            </Grid.Column>
            <Grid.Column>
              Set up payments for shared contracts, and housing arrangements
            </Grid.Column>
            <Grid.Column>
              Establish a chain of trust for all parties involved regarding future payments
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      </div>
    )
  }
}
