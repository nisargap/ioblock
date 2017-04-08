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

      metacoin.addAgreement.call(receiverAddr, sendersAddrs, amounts).then((response) => {
        console.log(response);
        console.log(response[1].toString());
        metacoin.getLastAgreement().then((response) => {
          console.log(response);
          dispatch({type: "NEW_AGREEMENT", payload: response[1]});
        })

      })
    })
  }
}
