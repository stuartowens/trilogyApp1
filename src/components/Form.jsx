import React from 'react';
import './app.scss';


class Form extends React.Component {
  render() {
    return (
        <div className="Form">
          <h2>GET PROGRAM INFO</h2>
          <form>
            <p>Step 1 of 3</p>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <button type="submit">CONTINUE</button>
          </form>
        </div>
      )
  }
}

export default Form;
