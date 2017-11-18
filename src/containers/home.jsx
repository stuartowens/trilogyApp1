import React from 'react';
import { connect } from 'react-redux';

import { navigateFaq, navigateQuery } from '../actions/index.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  handleChange(e) {
    this.setState({ ...this.state, value: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>
          Home Page
        </h1>
        <form>
          <input type="text" value={this.state.value} placeholder="Say Something" onChange={(e) => this.handleChange(e)}>
          </input>
          <button onClick={() => this.props.dispatch(navigateQuery(this.state.value))}>
            Submit
          </button>
          <div>
            <button onClick={() => this.props.dispatch(navigateFaq())}>
              FAQ
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(Home)
