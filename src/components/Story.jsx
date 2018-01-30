import React from 'react';
import './app.scss';

//here is the parallax component

class Story extends React.Component {
  render() {
    return (
        <div className="Story">
          <h1>Our Story</h1>
          <p>Last year, U.S. companies struggle to fill more than 1.3 million job openings in software development. The market is responding to this demand, but most students turn to standalone code development boot camps for the answer.</p>
        </div>
      )
  }
}

export default Story;
