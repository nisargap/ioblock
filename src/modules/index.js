import metacoin from './metacoin';
import user from './user';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  metacoin,
  user,
  form: formReducer,
});
export default rootReducer;
