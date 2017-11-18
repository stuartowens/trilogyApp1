import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';

class Query extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Say something
        </h1>
        <p>
          You said: {this.props.string}
        </p>
        <Link href="/">
          <button>
            Home
          </button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    string: state.router.query.string
  }
}

export default connect(mapStateToProps, null)(Query);
