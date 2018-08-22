import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
//Store
import { createStore } from 'redux';
import appReducer from './reducer/index';
import { Provider } from 'react-redux';
const store = createStore(appReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main-content')
);
