import React from 'react';
import './app.scss';
import Coding from './Coding.jsx';
import Data from './Data.jsx';
import Form from './Form.jsx';

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
        <div id="Hero_code">
          <div className="Learn-Head">
            <h1>Learn Coding<br /> in 24 Weeks</h1>
            <p>Class starts May 15, 2018</p>
          </div>
          <h2 id="Content"></h2>
          <div className="Top-Content">
            <h2 id="Top-Content-H">CODING</h2>
            <p id="Top-Content-P">Coding Boot Camp equips stuedents skills for full-stack web development through dynamic, in-person classes.</p>
          </div>
          <div className="Bottom-Content">
            <h2 id="Bottom-Content-H">DATA ANALYTICS</h2>
            <p id="Bottom-Content-P">Data Boot Camp equips students with the key skills for full-stack web developemnt through dynamic, in-person classes.</p>
          </div>
          <Form />
        </div>
      )
  }
}

export default Hero;
