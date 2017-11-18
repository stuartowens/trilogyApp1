import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { Provider } from 'react-redux';
import configureStore from './store.jsx';
import { initializeCurrentLocation } from 'redux-little-router';

const store = configureStore();
const intialLocation = store.getState().router;
if (intialLocation) {
  store.dispatch(initializeCurrentLocation(intialLocation))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
