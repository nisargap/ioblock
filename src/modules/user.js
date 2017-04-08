export default function reducer(state = {
  address: "",
  username: "",
  password: "",
  agreements: [],
  userId: 0,
  name: ""
}, action = {}) {

  switch(action.type) {
    case "GET_ADDRESS":
      return {
        ...state,
        address: action.payload
    }
    case "VALIDATE_LOGIN":
      return {
        ...state,
        loggedIn: action.payload
      }
    case "PAY_AGREEMENT":
      return {
        ...state,
        agreements: action.payload
      }
    case "NEW_AGREEMENT":
      return {
        ...state,
        agreements: [...state.agreements, action.payload]
      }
    default: return state;
  }

}
