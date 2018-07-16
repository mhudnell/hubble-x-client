import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import testData from './userTests.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" render={() => (
            <h1>Welcome to the Shared Component display tool</h1>
          )}/>
          <Route exact={true} path="/:group/:test" component={TestComponent} />
          <Route exact={true} path="/testData.json" component={TestData} />
          <Route path='*' component={Error404} status={404} />
        </Switch>
      </Router>
    );
  }
}

const TestComponent = ({ match }) => {
  var DynamComponent = null;
  for(let groupIndex in testData.groups){
    let group = testData.groups[groupIndex];
    if(group.groupName === match.params.group){
      for(let testIndex in group.tests){
        let test = group.tests[testIndex];
        if(test.testName === match.params.test){
          DynamComponent = test.reactFunc;
        }
      }
    }
  }
  if(!DynamComponent) return (<Error404/>);
  
  return (
    <DynamComponent/>
  );
}

class TestData extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(testData)}
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

