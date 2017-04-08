import React, { Component } from "react";
import { Grid, Segment, Checkbox, Table } from "semantic-ui-react";
export default class Settings extends Component {
  render() {
    const styles = {
      leftCol : {
        width: "40%"
      },
      rightCol : {
        width: "60%"
      }
    }
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column style={styles.leftCol}>
            <Segment raised>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Settings</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>General</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Notification</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Two Factor Authentication</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Privacy</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Trusted Sources</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Segment>
            </Grid.Column>
            <Grid.Column style={styles.rightCol}>
              <Segment>
                <Table celled paddded>
                  <Table.Header>
                    <Table.HeaderCell>General</Table.HeaderCell>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row><Table.Cell>Name: Administrator</Table.Cell></Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
