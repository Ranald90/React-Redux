import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setName } from '../actions/userActions';

class Main extends Component {
  render() {
    const { setName } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-primary" onClick={() => setName('Anna')}>
              Change the Username
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
