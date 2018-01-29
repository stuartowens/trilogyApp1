import React from 'react';
import './app.scss';
import Coding from './Coding.jsx';
import Data from './Data.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';


class HeroMobile extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      // heroId: 'Hero_code'
    }
  }
  componentDidMount () {
    // console.log(this.props, 'heroId');
  }
  render() {
    return (
        <div>
          <div className="Hero-Mobile">
            <div  id="Hero_mobile_code">
              <Header />
              <div className="Learn-Heading">
                <h1>Learn Coding in 24 Weeks</h1>
                <p>Class starts May 15, 2018</p>
              </div>
              <div className="Data-Content">
                <p>Data Boot Camp equips students with the key skills for full-stack web development through dynamic, in-person classes.</p>
              </div>
            </div>
            <Form />
          </div>
        </div>
      )
  }
}

export default HeroMobile;
