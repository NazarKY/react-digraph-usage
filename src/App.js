import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Graph from './graph';

import './app.scss';

class App extends React.Component {
  render() {
    return (
        <Router>
          <div id='content'>
            <Route exact={true} path="/" component={Graph} />
          </div>
        </Router>
    );
  }
}

export default App;
