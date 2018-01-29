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
    // var carousel = document.getElementById('carousel');
    // console.log(carousel, 'carousel')
  	// var figure = carousel.querySelector('figure');
  	// var nav = carousel.querySelector('nav');
  	// var numImages = figure.childElementCount;
  	// var theta =  2 * Math.PI / numImages;
  	// var currImage = 0;
    // nav.addEventListener('click', onClick, true);
    // function onClick(e) {
    // 	e.stopPropagation();
    //
    // 	var t = e.target;
    // 	if (t.tagName.toUpperCase() != 'BUTTON')
    // 		return;
    //
    // 	if (t.classList.contains('next')) {
    // 		currImage++;
    // 	}
    // 	else {
    // 		currImage--;
    // 	}
    //
    // 	figure.style.transform = `rotateY(${currImage * -theta}rad)`;
    // }
  }
  render() {
    return (
        <div>
          <div className="Hero-Mobile">
                <div  className="Hero_mobile">
                  <Header />
                  <div  className="card-container">
                    <div className="card">
                      <div className="front">
                        <div className="Learn-Heading">
                          <h1>Learn Coding in 24 Weeks</h1>
                          <p>Class starts May 15, 2018</p>
                        </div>
                        <div className="Data-Content">
                          <p>Data Boot Camp equips students with the key skills for full-stack web development through dynamic, in-person classes.</p>
                        </div>
                      </div>
                      <div  className="back">
                        <div className="Learn-Heading">
                          <h1>Learn Coding in 24 Weeks</h1>
                          <p>Class starts May 15, 2018</p>
                        </div>
                        <div className="Data-Content">
                          <p>Data Boot Camp equips students with the key skills for full-stack web development through dynamic, in-person classes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <Form />
          </div>
        </div>
      )
  }
}

export default HeroMobile;
