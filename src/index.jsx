import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/home.jsx';
import { Provider } from 'react-redux';
import configureStore from './store.js';
import { initializeCurrentLocation } from 'redux-little-router';

const store = configureStore();
const intialLocation = store.getState().router;
if (intialLocation) {
  store.dispatch(initializeCurrentLocation(intialLocation))
}
// const Home = "Home";
//
// const App = (props) => <Home />;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('app')
);
