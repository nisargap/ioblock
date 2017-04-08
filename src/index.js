import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import '../bower_components/semantic/dist/semantic.min.css';
import '../bower_components/font-awesome/css/font-awesome.min.css';
import Store from './store';
import web3 from "./web3";
import { Provider } from 'react-redux';
import { actions as metaCoinActions } from './modules/metacoin.js';
import Metacoin from "./metacoin";
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';
// components
import Header from './components/Header';
import DashHeader from './components/DashHeader';
import Home from './pages/Home/';
import SignUp from './pages/SignUp/';
import SignIn from './pages/SignIn/';
import Dashboard from './pages/Dashboard/';
import Settings from './pages/Settings/';
import TestCreateAgreement from './pages/TestCreateAgreement/';

const store = Store();
Metacoin.then((metacoin) =>
  metacoin.Transfer((error, { args }) => {
    store.dispatch(metaCoinActions.fetchBalance(web3.eth.accounts[0]))
    store.dispatch(metaCoinActions.receiveTransaction(args))
  })
)


store.dispatch(metaCoinActions.fetchBalance(web3.eth.accounts[0]));


window.addEventListener('load', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Header}>
          <IndexRoute component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/testcreate" component={TestCreateAgreement} />
        </Route>
        <Route path="/dash/" component={DashHeader} >
          <IndexRoute component={Dashboard} />
          <Route path="settings" component={Settings} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
