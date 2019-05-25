import './App.css';

import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CalendarWithRouter as Calendar} from './components/Calendar';

class App extends React.Component {
  // Example fetch to the server.
  // fetchData = async () => {
  //   const response = await fetch(`/api`, { method: 'GET' });
  //   const json = await response.json();
  //   console.log(json);
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/:year/:month' component={Calendar} />
          <Route path='/' component={Calendar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
