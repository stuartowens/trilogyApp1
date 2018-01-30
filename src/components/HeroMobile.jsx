import React from 'react';
import './app.scss';
import Form from './Form.jsx';
import Header from './Header.jsx';

//As I mentionsed in the CSS file, the onClick handler lives here and it simply changes a class on
//the card element to flip it to the other side. Kind of a hack way to make a carousel, and if I had more items
//to switch between I would find a different way to do this. I also regret not having dedicated button for
//the switch, but if I had more time I could find a way to make the design and the functionality work together.
//I know the icon doesn't exactly look right  but if I knew where your icons come from I could recreate the mockup more acurrately

class HeroMobile extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
    this.onClickFunction = function() {
      var cardContainer = document.querySelector('.card-container');
      if(cardContainer.className === 'card-container flip') {
        cardContainer.className = 'card-container'
      } else {
        cardContainer.className = cardContainer.className + ' flip';
      }
    }.bind(this)
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
                        <div className="Data-Content" onClick={()=> this.onClickFunction()}>
                          <p>Coding Boot Camp equips students skills for full-stack web development through dynamic, in-person classes.</p>
                        </div>
                      </div>
                      <div  className="back">
                        <div className="Learn-Heading">
                          <h1>Learn Coding in 24 Weeks</h1>
                          <p>Class starts May 15, 2018</p>
                        </div>
                        <div className="Data-Content" onClick={()=> this.onClickFunction()}>
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
