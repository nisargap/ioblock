import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
export default class SignIn extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: ""
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.username === "admin" && this.state.password === "password") {
      this.context.router.push("/dash/");
    } else {
      this.setState({
        errorMsg: "Incorrect login credentials"
      })
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  render() {
    const styles = {
      signupbox: {
        width: "50%",
        padding: "2em",
        margin: "5% auto"
      },
      remember: {
        margin: 0,
        padding: 0,
        textAlign: "center"
      }
    }
    return(
      <Paper style={styles.signupbox}>
        <h1>Sign In</h1>
        <Divider />
        <form onSubmit={this.handleSubmit}>
          <TextField
            onChange={this.handleUsernameChange}
            fullWidth={true}
            hintText="Username"
            floatingLabelText="Username"
          /><br />
          <TextField
            onChange={this.handlePasswordChange}
            fullWidth={true}
            type="password"
            hintText="Password"
            floatingLabelText="Password"
          />
        <br />
        <RaisedButton type="submit" className="button-submit" onTouchTap={this.handleSubmit} label="Sign In" primary={true} />
        </form>
        {this.state.errorMsg === "" ? "" : <h4>{this.state.errorMsg}</h4> }
      </Paper>
    )
  }
}
