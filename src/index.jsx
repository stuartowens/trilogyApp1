import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import $ from 'jquery';

const App = (props) => <Home />;

ReactDOM.render(<App />, document.getElementById('app'));
