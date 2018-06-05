import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { BandwidthProvider } from '@bandwidth/shared-components';
import { Accordion, AccordionGroup } from '@bandwidth/shared-components';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" render={() => (
            <h1>Welcome to the Shared Component display tool</h1>
          )}/>
          <Route exact={true} path="/c/:component" component={SharedComponent} />
          <Route path='*' component={Error404} />
        </Switch>
      </Router>
    );
  }
}

const SharedComponent = ({ match }) => {
  var DynamComponent = SharedComponents[match.params.component];
  if(!DynamComponent) return (<Error404/>);
  return (
    <BandwidthProvider>
      <h1> </h1>
      <DynamComponent/>
    </BandwidthProvider>
  );
}

// all shared component test cases go under here
var SharedComponents = {};

SharedComponents["Accordion"] = () => (
  <Accordion label="Hello" isExpanded="true">
    Some content
  </Accordion>
);

SharedComponents["AccordionGroup"] = () => (
  <AccordionGroup startExpandedKey={3}>
    <Accordion key={0} label="Option 1">Content 1</Accordion>
    <Accordion key={1} label="Option 2">Content 2</Accordion>
    <Accordion key={2} label="Option 2">Content 2</Accordion>
    <Accordion key={3} label="Option 3">Content 3</Accordion>
    <Accordion key={4} label="Option 4">Content 4</Accordion>
    <Accordion key={5} label="Option 5">Content 5</Accordion>
    <Accordion key={6} label="Option 6">Content 6</Accordion>
  </AccordionGroup>
);

// 404 page
class Error404 extends Component {
  render() {
    return (
      <h1>404</h1>
    );
  }
}

export default App;

// class AccordionTest extends Component {
//   render() {
//     return (
//       <Accordion label="Hello">
//         Some content
//       </Accordion>
//     );
//   }
// }
// SharedComponents["AccordionTest"] = AccordionTest;

