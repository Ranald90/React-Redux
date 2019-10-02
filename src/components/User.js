import React, { Component } from 'react';

export class User extends Component {
  render() {
    const { username } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The User Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>User Name: {username}</p>
          </div>
        </div>
      </div>
    );
  }
}
