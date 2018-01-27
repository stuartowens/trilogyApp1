import React from 'react';
import './app.scss';


class Form extends React.Component {
  render() {
    return (
        <div className="Form">
          <h2>GET PROGRAM INFO</h2>
          <p>Step 1 of 3</p>
          <form>
            <input type="text" placeholder="First name" />
            {/* <p>   </p> */}
            <input type="text" placeholder="Last name" />
          </form>
          <button type="submit">CONTINUE <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
        </div>
      )
  }
}

export default Form;
