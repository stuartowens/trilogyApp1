import React from 'react';
import './app.scss';


class Faq extends React.Component {
  render() {
    return (
        <div className="Faq">
          <h1>Frequently Asked Questions</h1>
          <div id="faq-1"><a href="#answer-1"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>When does the program start?</a></div>
          <div id="answer-1">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div id="faq-2"><a href="#answer-2"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>Can I keep working while studying at Trilogy Data Science and Analytics Boot Camp?</a></div>
          <div id="answer-2">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div id="faq-3"><a href="#answer-3"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>How long does it take to complete the program?</a></div>
          <div id="answer-3">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div id="faq-4"><a href="#answer-4"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>Do you provide career placement support?</a></div>
          <div id="answer-4">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div id="faq-5"><a href="#answer-5"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>Do I need to have previous experience in programming or data analytics before applying?</a></div>
          <div id="answer-5">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div id="faq-6"><a href="#answer-6"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i>What sets your boot camp apart from othere I can join in Trilogy?</a></div>
          <div id="answer-6">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Consectetur adipiscing elit</li>
            </ul>
          </div>
        </div>
      )
  }
}

export default Faq;
