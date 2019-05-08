import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import List from './components/List';

class App extends Component {

  render(){
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
