import React, { Component } from 'react';

import { User } from '../components/User';
import Main from './Main';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="container">
        <h1>Hello world</h1>
        <Main />
        <User username={user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(App);
