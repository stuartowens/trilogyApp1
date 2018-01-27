import React from 'react';
import './app.scss';
var phone = require('../images/phone.png')
var completeProjIcon = require('../images/icons/complete_proj.svg');
var benefitIcon = require('../images/icons/benefit.svg');
var dataCodingIcon = require('../images/icons/data_coding.svg');
var timeIcon = require('../images/icons/time.svg');



class Feature extends React.Component {
  render() {
    return (
      <div className="lazy-feature">
        <h1>Featuring</h1>
        <div className="Feature">
          <div className="feature-child" id="feature-3">
            <img src={phone} />
            <p>*The material in this course is subject to change due to market demand.</p>
          </div>
          <div className="feature-child" id="feature-1">
            <img src={dataCodingIcon}/>
            <p>Learn Advanced Excel, Python, Javascript '(D3.js, Leaflet.js)', HTML5/CSS, API Interactions, Social Media Mining, SQL, Tableau, Advanced Statistics, Machine LEarning, R, Git/GitHub, and More.*</p>
          </div>
          <div className="feature-child" id="feature-2">
            <img src={timeIcon}/>
            <p>Study part-time, three days a week, while maintaining your work schedule.</p>
          </div>
          <div className="feature-child" id="feature-4">
            <img src={benefitIcon}/>
            <p>Benefit from a wide range of career services to position you for success as you work to advance in your current career or seek a new opportunity.</p>
          </div>
          <div className="feature-child" id="feature-5">
            <img src={completeProjIcon}/>
            <p>Complete projects using real data sets from the worlds of finance, healthcare, government, social welfare, and more-allowing you to build a strong portfolio with a professional demonstration.</p>
          </div>
        </div>
      </div>
      )
  }
}

export default Feature;
