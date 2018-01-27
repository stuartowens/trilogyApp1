import React from 'react';
import './app.scss';
import Coding from './Coding.jsx';
import Data from './Data.jsx';
import Form from './Form.jsx';
import Header from './Header.jsx';


class Hero extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      // heroId: 'Hero_code'
    }
  }
  componentDidMount () {
    console.log(this.props, 'heroId');
  }
  render() {
    return (
        <div>
          <div className="Hero" id="Hero_code">
            <Header />
            <div className="Learn-Head">
              <h1>Learn Coding<br /> in 24 Weeks</h1>
              <p>Class starts May 15, 2018</p>
            </div>
            <div className="Top-Content">
              <h2 id="Top-Content-H">CODING</h2>
              <p id="Top-Content-P">Coding Boot Camp equips students skills for full-stack web development through <br /> dynamic, in-person classes.</p>
              {/* <h1>   ___________________</h1> */}
            </div>
            <div className="Bottom-Content">
              <h2 id="Bottom-Content-H">DATA ANALYTICS</h2>
              <p id="Bottom-Content-P">Data Boot Camp equips students with the key skills for full-stack web development<br /> through dynamic, in-person classes.</p>
              {/* <h1>   ___________________</h1> */}
            </div>
            <Form />
          </div>
        </div>
      )
  }
}

export default Hero;
