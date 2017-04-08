import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import '../bower_components/semantic/dist/semantic.min.css';
import Store from './store';
import web3 from "./web3";
import { Provider } from 'react-redux';
import { actions as metaCoinActions } from './modules/metacoin.js';
import Metacoin from "./metacoin";
import { Router, Route, browserHistory } from 'react-router'
import './index.css';
// components
import Home from './pages/Home/';

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
        <Route path="/" component={Home} />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
