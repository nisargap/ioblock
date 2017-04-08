import React, { Component } from "react";
import { Segment, Grid, Table, Button } from "semantic-ui-react";
export default class Dashboard extends Component {
  render() {
    const styles = {
      due: {
        fontSize: "2em",
        fontWeight: "bold"
      },
      padding: {
        padding: "1.8em"
      },
      leftCol: {
        width: "70%"
      },
      rightCol: {
        width: "30%"
      },
      topheader: {
        fontSize: "1.5em",
        fontWeight: "bold"
      }
    }
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column style={styles.leftCol}>
              <Segment style={styles.padding} raised>
                <span style={styles.topheader}><i className="fa fa-user" /> Welcome Administrator!</span>
                <br /><br />
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      Total Balance Due<br /><br />
                    <span style={styles.due}>$199.00</span>
                    </Grid.Column>
                    <Grid.Column>
                      Next Payment<br /><br />
                    <span style={styles.due}>09/05/17</span>
                    </Grid.Column>
                    <Grid.Column>
                      Contracts<br /><br />
                    <span style={styles.due}>3</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
              <Segment style={styles.padding} raised>
                <span style={styles.topheader}><i className="fa fa-file-text" /> Participating Smart Contracts</span>
                <br /><br />
                <Table celled padded>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Recurring</Table.HeaderCell>
                      <Table.HeaderCell>Members</Table.HeaderCell>
                      <Table.HeaderCell>AutoPay</Table.HeaderCell>
                      <Table.HeaderCell>Balance Owed</Table.HeaderCell>
                      <Table.HeaderCell>View Details</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Apt</Table.Cell>
                      <Table.Cell>Yes</Table.Cell>
                      <Table.Cell>Administrator, Jack, Brian</Table.Cell>
                      <Table.Cell>Yes</Table.Cell>
                      <Table.Cell>$10.00</Table.Cell>
                      <Table.Cell><Button primary><i className="fa fa-eye" /></Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>AirBnb Joe</Table.Cell>
                      <Table.Cell>No</Table.Cell>
                      <Table.Cell>Administrator, Ralph, Roe</Table.Cell>
                      <Table.Cell>Yes</Table.Cell>
                      <Table.Cell>$169.00</Table.Cell>
                      <Table.Cell><Button primary><i className="fa fa-eye" /></Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Saturday Pizza</Table.Cell>
                      <Table.Cell>No</Table.Cell>
                      <Table.Cell>Administrator, Ellen, Ashley</Table.Cell>
                      <Table.Cell>Yes</Table.Cell>
                      <Table.Cell>$20.00</Table.Cell>
                      <Table.Cell><Button primary><i className="fa fa-eye" /></Button></Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
            <Grid.Column style={styles.rightCol}>
              <Segment style={styles.padding} raised>
                <h1><i className="fa fa-bell" /> Alerts</h1>
                <Table celled padded>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Messages</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>You sent Jack the landlord $52.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>You sent Ed $12.00</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Brian sent you $12.00</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Button primary>View all alerts</Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
