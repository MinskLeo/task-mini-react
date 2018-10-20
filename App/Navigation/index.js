import * as React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from 'App/Redux/Store';

// AuthStack
import AuthLoader from 'App/Routes/AuthStack/AuthLoader';
import LoginPage from 'App/Routes/AuthStack/LoginPage';

class Navigation extends React.Component {
  render () {
    return (
      <Provider store={createStore()}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={AuthLoader} />
            <Route exact path='/login' component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Navigation;
