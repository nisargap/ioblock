import web3 from "../web3";
import MetaCoin from "../metacoin";

let USER_ADDRESSES = [];

let setAccounts = (callback) => {
  web3.eth.getAccounts((accounts) => {
    USER_ADDRESSES = accounts;
    callback();
  });
}

export function getUserId() {

  // get this id from database
  return 0;
}

export function getAddress() {
  return function(dispatch) {
    setAccounts(() => {
      dispatch({type: "GET_ADDRESS", payload: USER_ADDRESSES[getUserId()]});
    })
  }
}

export function createAgreement(receiverAddr, sendersAddrs, amounts) {
  return function(dispatch) {
    MetaCoin.then((metacoin) => {
      metacoin.addAgreement(receiverAddr, sendersAddrs, amounts, { from: web3.eth.accounts[0], gas: 770960}).then((response) => {

        dispatch({type: "NEW_AGREEMENT", payload: response});

      })
    })
  }
}
