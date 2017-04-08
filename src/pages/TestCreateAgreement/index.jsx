import React, { Component } from "react";
import * as UserActions from '../../actions/userActions';
import { connect } from 'react-redux';

class TestCreateAgreement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
      senders: [],
      amounts: []
    }
  }
  recvChange = (e) => {
    this.setState({
      receiver: e.target.value
    })
    console.log(this.state.receiver)
  }
  sendChange = (value, index) => {
    let newSenders = this.state.senders;
    newSenders[index] = value;
    this.setState({
      senders: newSenders
    });
  }
  amtChange = (value, index) => {
    let newAmounts = this.state.amounts;
    newAmounts[index] = value;
    this.setState({
      amounts: newAmounts
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("gets here!")
    console.log(this.state.senders);
    this.props.dispatch(UserActions.createAgreement(this.state.receiver, this.state.senders, this.state.amounts));
  }
  render() {
    //receiverAddr, sendersAddrs, amounts
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.recvChange} placeholder="Receiver Address e.g. 0x....." /><br />
          <input type="text" onChange={(e) => { this.sendChange(e.target.value, 0); }} placeholder="Sender Address 1 e.g. 0x....." /><br />
          <input type="text" onChange={(e) => { this.sendChange(e.target.value, 1); }} placeholder="Sender Address 2 e.g. 0x....." /><br />
          <input type="text" onChange={(e) => { this.sendChange(e.target.value, 2); }} placeholder="Sender Address 3 e.g. 0x....." /><br />
          <input type="text" onChange={(e) => { this.sendChange(e.target.value, 3); }} placeholder="Sender Address 4 e.g. 0x....." /><br />
          <input type="number" onChange={(e) => { this.amtChange(e.target.value, 0); }} placeholder="Amount 1 e.g. 0x....." /><br />
          <input type="number" onChange={(e) => { this.amtChange(e.target.value, 1); }} placeholder="Amount 2 e.g. 0x....." /><br />
          <input type="number" onChange={(e) => { this.amtChange(e.target.value, 2); }} placeholder="Amount 3 e.g. 0x....." /><br />
          <input type="number" onChange={(e) => { this.amtChange(e.target.value, 3); }} placeholder="Amount 4 e.g. 0x....." /><br />

          <input type="submit" value="Create Agreement" />
        </form>
      </div>
    )
  }
}

export default connect((state) => {
  return ({
    address: state.user.address,
    username: state.user.username,
    password: state.user.password,
    agreements: state.user.agreements
  })
})(TestCreateAgreement);
