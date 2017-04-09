import React, { Component } from "react";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import * as UserActions from '../../actions/userActions';
import { connect } from 'react-redux';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receiver: "",
      senders: [],
      amounts: [],
      contractCount: 0,
      open: false
    }
  };
  recvChange = (e) => {
    this.setState({
      receiver: e.target.value
    })
  };
  sendChange = (value, index) => {
    let newSenders = this.state.senders;
    newSenders[index] = value;
    this.setState({
      senders: newSenders
    });
  };
  amtChange = (value, index) => {
    let newAmounts = this.state.amounts;
    newAmounts[index] = value;
    this.setState({
      amounts: newAmounts
    })
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(UserActions.createAgreement(this.state.receiver, this.state.senders, this.state.amounts));
    this.handleOpen();
  };
  handleClose = () => {
    this.setState({open: false});
  };
  handleOpen = () => {
    this.setState({open: true});
  };
  render() {
    const styles = {
      container: {
        padding: "1.2em",
        margin: "4% auto",
        width: "60%",
      },
      paperStyles: {
        padding: "3em"
      }
    }
    const actions = [
      <RaisedButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];
    let compArray = this.props.agreements.reverse();
    compArray = compArray.slice(0, 1);
    let agreementComponents = compArray.map((obj) => {
      return (
          <tr>
            <td>{obj.tx}</td>
            <td>{obj.receipt.blockNumber}</td>
          </tr>
      )
    });
    agreementComponents = (<table className="niceTable"><tr>
      <th>Transaction Address</th>
      <th>Block Number</th>
    </tr>{agreementComponents}</table>)
    return (
      <div>
        <div style={styles.container}>
        <Paper style={styles.paperStyles}>
          <h1>Create a smart contract agreement</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField fullWidth={true} type="text" hintText="Receiver Address"
                floatingLabelText="Receiver Address"
                defaultValue="0x7e136c9b0296685937bc339b56316d1ff24f53e9"
                onChange={this.recvChange} /><br />
              <table>
            <tr>
            <td style={{width: "600px"}}>
            <TextField hintText="Sender 1 Address"
                floatingLabelText="Sender 1 Address"
                fullWidth={true}
                defaultValue="0x80305901a6080cf3bc087b54c95339a48451384c" type="text" onChange={(e) => { this.sendChange(e.target.value, 0); }} /><br />
            <TextField hintText="Sender 2 Address"
              fullWidth={true}
              floatingLabelText="Sender 2 Address"
              defaultValue="0x6b1f804ebdc6d4b24d07d65b9e32e4bafc66d921"  type="text" onChange={(e) => { this.sendChange(e.target.value, 1); }} /><br />
            <TextField hintText="Sender 3 Address"
              fullWidth={true}
              defaultValue="0x5314a70baedf864e3397381c3ba386f63fe12faa" floatingLabelText="Sender 3 Address" type="text" onChange={(e) => { this.sendChange(e.target.value, 2); }}  /><br />
            <TextField hintText="Sender 4 Address"
              fullWidth={true}
              defaultValue="0xf24895f5c184ac861c54c11eb804ee6624a6456e" floatingLabelText="Sender 4 Address" type="text" onChange={(e) => { this.sendChange(e.target.value, 3); }}  />
          </td>
          <td>
            <TextField hintText="Amount 1 Address"
              defaultValue="100" floatingLabelText="$ Amount 1"  type="number" onChange={(e) => { this.amtChange(e.target.value, 0); }}  /><br />
            <TextField hintText="$ Amount 2"
              defaultValue="25" floatingLabelText="$ Amount 2"  type="number" onChange={(e) => { this.amtChange(e.target.value, 1); }} /><br />
            <TextField hintText="$ Amount 3"
              defaultValue="45" floatingLabelText="$ Amount 3"  type="number" onChange={(e) => { this.amtChange(e.target.value, 2); }} /><br />
            <TextField hintText="$ Amount 4"
              defaultValue="75" floatingLabelText="$ Amount 5"  type="number" onChange={(e) => { this.amtChange(e.target.value, 3); }} /><br />

          </td></tr></table>
            <RaisedButton type="submit" className="button-submit" label="Create Agreement" primary={true} />
              <Dialog
                title="Successfully Deployed Contract"
                modal={false}
                actions={actions}
                open={this.state.open}
                onRequestClose={this.handleClose}>
                {agreementComponents}
              </Dialog>
          </form>
        </Paper>
        </div>
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
})(Dashboard);
