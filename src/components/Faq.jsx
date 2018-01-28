import React from 'react';
import './app.scss';
import Collapsible from  './Collapsible.jsx';


class Faq extends React.Component {
  // constructor(){
  //   super()
  // }
  // componentDidMount(){
  //   var answer = document.getElementById('answer-1');
  //   var question = document.getElementById('faq-1');
  //   $('#answer-1').hide();
  //   $('#faq-1').click(
  //       function() {
  //           var toggle = $(this).nextUntil('#faq-1');
  //           toggle.slideToggle();
  //           $('#answer-1').not(toggle).slideUp();
  //       });
  // };
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
