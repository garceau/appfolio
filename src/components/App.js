import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../lib/store';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
