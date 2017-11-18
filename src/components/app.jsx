import React from 'react';
import { Fragment } from 'redux-little-router';

import Faq from '../containers/faq.jsx';
import Query from '../containers/query.jsx';
import Home from '../containers/home.jsx';

class App extends React.Component {
  render() {
    return (
      <Fragment forRoute='/'>
        <div className="App">
          <h1>Wanna Be in a Band?</h1>
          <Fragment forRoute='/'><Home /></Fragment>
          <Fragment forRoute='/faq'><Faq /></Fragment>
          <Fragment forRoute='/query'><Query /></Fragment>
          <Fragment forNoMatch>
            <h1>Welcome to Dimension 404</h1>
          </Fragment>
        </div>
      </Fragment>
    )
  }
}

export default App;
