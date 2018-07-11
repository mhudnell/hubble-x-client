import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { BandwidthProvider } from '@bandwidth/shared-components';

import tests from './userTests.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" render={() => (
            <h1>Welcome to the Shared Component display tool</h1>
          )}/>
          <Route exact={true} path="/c/:component" component={TestComponent} />
          <Route exact={true} path="/testData.json" component={TestData} />
          <Route path='*' component={Error404} status={404} />
        </Switch>
      </Router>
    );
  }
}

const TestComponent = ({ match }) => {
  var DynamComponent = tests.testComponents[match.params.component];
  if(!DynamComponent) return (<Error404/>);
  
  return (
    <BandwidthProvider>
      <h1> </h1>
      <DynamComponent/>
    </BandwidthProvider>
  );
}

class TestData extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(tests.testData)}
      </div>
    );
  }
}

// 404 page
class Error404 extends Component {
  render() {
    return (
      <h1>404</h1>
    );
  }
}


export default App;

