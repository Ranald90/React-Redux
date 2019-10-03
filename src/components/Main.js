import React, { Component } from 'react';

export class Main extends Component {
  changeUsername = () => {
    const { changeUsername } = this.props;
    changeUsername('Anna');
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button className="btn btn-primary" onClick={this.changeUsername}>
              Change the Username
            </button>
          </div>
        </div>
      </div>
    );
  }
}