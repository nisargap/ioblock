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
      console.log(receiverAddr);
      console.log(sendersAddrs);
      console.log(amounts);
      metacoin.addAgreement.call(receiverAddr, sendersAddrs, amounts).then((success, contractAddr) => {
        console.log(success);
        console.log(contractAddr);
        console.log("CHECKPOINT 3");
        dispatch({type: "NEW_AGREEMENT", payload: contractAddr});
      })
    })
  }
}
