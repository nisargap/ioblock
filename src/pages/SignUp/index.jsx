import React, { Component } from "react";
import { Input, Segment, Button } from "semantic-ui-react";
export default class SignUp extends Component {
  render() {
    const styles = {
      signupbox: {
        width: "50%",
        margin: "0 auto"
      }
    }
    return(
      <Segment style={styles.signupbox}>
        <h1>Sign Up</h1>
        <form>
          <Input className="input" placeholder="username" /><br /><br />
          <Input className="input" placeholder="password" /><br /><br />
          <Input className="input" placeholder="password again" /><br /><br />
          <Input className="input" placeholder="phone number" /><br /><br />
          <Button primary>Sign Up</Button><br />
        </form>
      </Segment>
    )
  }
}
