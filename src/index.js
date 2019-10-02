import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { User } from './components/User';
import { Main } from './components/Main';

class App extends Component {
  state = {
    userName: 'Max'
  };

  changeUsername = newName => {
    this.setState({
      userName: newName
    });
  };

  render() {
    const { userName } = this.state;
    return (
      <div className="container">
        <h1>Hello world</h1>
        <Main changeUsername={this.changeUsername} />
        <User username={userName} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
