import React, { Component } from "react";
import { Input, Segment, Button, Checkbox, Message } from "semantic-ui-react";
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
        margin: "0 auto"
      },
      remember: {
        margin: 0,
        padding: 0,
        textAlign: "center"
      }
    }
    return(
      <Segment style={styles.signupbox}>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" className="input" placeholder="username" onChange={this.handleUsernameChange} /><br /><br />
          <Input type="password" className="input" placeholder="password" onChange={this.handlePasswordChange} /><br /><br />
          <Checkbox style={styles.remember} label="Remember Me" /><br /><br />
          <Button primary>Sign In</Button><br />
        </form>
        {this.state.errorMsg === "" ? "" : (<Message color="red">{this.state.errorMsg}</Message>) }
      </Segment>
    )
  }
}
