import * as React from 'react';
import {
  Switch,
  Route,
  Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from 'App/Redux/Store';
import CookieHelper from 'App/Helpers/CookieHelper';

// History
import { navigator } from 'App/Helpers/NavigationHelper';

// AuthStack
import AuthLoader from 'App/Routes/AuthStack/AuthLoader';
import LoginPage from 'App/Routes/AuthStack/LoginPage';

// Account
import AccountPage from 'App/Routes/UsersStack/Account';

// Dashboard
import Dashboard from 'App/Routes/Dashboard';

class Navigation extends React.Component {
  render () {
    return (
      <Provider store={createStore()}>
        <Router history={navigator}>
          <Switch>
            <Route exact path='/' component={AuthLoader} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/account' component={AccountPage} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Navigation;
