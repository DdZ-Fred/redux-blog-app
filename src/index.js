import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import rootReducer from './reducers';
import routes from './routes';


// This way, the middleware is applied on the whole app
// Though, it could be applied only on a single reducer (a portion of the root reducer)
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);


const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
