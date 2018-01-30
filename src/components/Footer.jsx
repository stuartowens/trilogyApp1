import React from 'react';
import './app.scss';
var Logo2 = require('../images/logos/logo_trilogy_blk.svg');

//Here I have to require the logo since it's is a svg file but it works fine a

class Footer extends React.Component {
  render() {
    return (
        <div className="Footer">
          <img src={Logo2} />
          <p>This program is offered through <br /> asdcdwfwf <strong>https://sddff:/</strong> <br/> Powered by Trilogy Education Services <br /> Contact lsdfsss Boot Camp at <strong>(xxx) xxx-xxxx</strong> <br/><br/><strong>Terms & Conditions</strong> | Privacy/Your Privacy Rights</p>
        </div>
      )
  }
}

export default Footer;
