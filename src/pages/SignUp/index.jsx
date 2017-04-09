import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
export default class SignUp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

  }
  render() {
    const styles = {
      signupbox: {
        width: "50%",
        padding: "2em",
        margin: "5% auto"
      },
    }
    return(
      <Paper style={styles.signupbox}>
        <h1>Sign Up</h1>
        <Divider />
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth={true}
            type="text"
            hintText="Username"
            floatingLabelText="Username"
          /><br />
          <TextField
            fullWidth={true}
            type="password"
            hintText="Password"
            floatingLabelText="Password"
          />
          <TextField
            fullWidth={true}
            type="password"
            hintText="Password Confirm"
            floatingLabelText="Password Confirm"
          />
        <br />
        <RaisedButton type="submit" className="button-submit" label="Sign Up" primary={true} />
        </form>
      </Paper>
    )
  }
}
