import React from 'react';
import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Demo from './Screens/Demo/Demo';
import Shared from './Screens/Shared/Shared';

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/demo">
            {/* <Text>Test </Text> */}
                <Demo />
            </Route>
            <Route exact path="/shared">
                <Shared />
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
