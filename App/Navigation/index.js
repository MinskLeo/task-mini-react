import * as React from 'react';
import {
  Switch,
  Route,
  Router
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from 'App/Redux/Store';

// History
import { navigator } from 'App/Helpers/NavigationHelper';

// AuthStack
import AuthLoader from 'App/Routes/AuthStack/AuthLoader';
import LoginPage from 'App/Routes/AuthStack/LoginPage';

// Account
import AccountPage from 'App/Routes/UsersStack/Account';

// Dashboard
import Dashboard from 'App/Routes/Dashboard';

// Projects
import ProjectsList from 'App/Routes/ProjectsStack/ProjectsList';

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
            <Route exact path='/projects' component={ProjectsList} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Navigation;
