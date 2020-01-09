import * as React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import Graph from './graph';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div id='content'>
          <ul>
            <li>To add nodes, hold shift and click on the grid or press on button "Add Node".</li>
            <li>To add edges, hold shift and click/drag to between nodes.</li>
            <li>To delete a node or edge, click on it and press delete.</li>
            <li>Click and drag nodes to change their position.</li>
          </ul>
          <Route exact path="/" component={Graph} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
