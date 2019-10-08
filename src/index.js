// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends Component {
//   state = {
//     userName: 'Max'
//   };

//   changeUsername = newName => {
//     this.setState({
//       userName: newName
//     });
//   };

//   render() {
//     const { userName } = this.state;
//     return (
//       <div className="container">
//         <h1>Hello world</h1>
//         <Main changeUsername={this.changeUsername} />
//         <User username={userName} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';

//Nasze dane, jeżeli innych nie mamy, inicjalizujące dane
const initialState = {
  result: 1,
  lastValue: [],
  userName: 'Karol'
};

//dostępne akcje które możemy wykonać
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValue, action.payload]
      };
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValue: [...state.lastValue, action.payload]
      };
      break;
  }
  return state;
};

//Tworzenie naszego store z danamymi
const store = createStore(reducer);

//Tutaj będą nasze aplikacje z reacta
store.subscribe(() => {
  console.log('State updated!', store.getState());
});

//Wybieram dostępną akcje z reducera i ją wysyłam
store.dispatch({
  type: 'ADD',
  payload: 100
});

store.dispatch({
  type: 'ADD',
  payload: 100
});

store.dispatch({
  type: 'ADD',
  payload: 100
});

store.dispatch({
  type: 'SUBTRACT',
  payload: 100
});
