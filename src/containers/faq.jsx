import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';

class Faq extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Faq
        </h1>
        <p>
          Say Something here about the purpose of this site
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

export default connect()(Faq)
