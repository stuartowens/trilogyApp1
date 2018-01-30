import React from 'react';
import './app.scss';
import Collapsible from  './Collapsible.jsx';

//If I could go back I would simply create these elements using a loop and keep the content
//in a sepperate place to make this look more clean
//I bring in the Collapsible component here to make the faq q and a collapse

class Faq extends React.Component {
  render() {
    return (
        <div className="Faq">
          <div className="faq-questions" id="accordion">
            <h1>Frequently Asked Questions</h1>
            <Collapsible className="faq-1" trigger='When does the program start?'>
                <ul id="answer-1">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                  <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                  <li>Consectetur adipiscing elit</li>
                </ul>
            </Collapsible>
            <Collapsible className="faq-2" trigger=" Can I keep working while studying at Trilogy Data Science and Analytics Boot Camp?" >
              <ul id="answer-2">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-3" trigger=" How long does it take to complete the program?" >
              <ul id="answer-3">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-4" trigger=" Do you provide career placement support?" >
              <ul id="answer-4">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-5" trigger="  Do I need to have previous experience in programming or data analytics before applying?" >
              <ul id="answer-5">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-6" trigger="  What sets your boot camp apart from othere I can join in Trilogy?" >
              <ul id="answer-6">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </Collapsible>
          </div>
        </div>
      )
  }
}

export default Faq;
