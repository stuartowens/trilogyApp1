import React from 'react';
import './app.scss';
var svgFile = require('../images/logos/logo_trilogy.svg')
var svgFile2 = require('../images/logos/logo_trilogy_blk.svg')

class Header extends React.Component {
  render() {
    return (
        <div className="Header">
          <img src={svgFile} />
          <p>To speak with an<br />admissions advisor call <a>(555)123-4567</a></p>
        </div>
      )
  }
}

export default Header;
