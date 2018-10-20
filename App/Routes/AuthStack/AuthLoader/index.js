import * as React from 'react';
import styles from './styles.module.css'
import Loader from 'App/Components/Loader';
import {
  Redirect
} from 'react-router-dom';

// Redux
import {
  login as loginAction,
  checkToken as checkTokenAction
} from 'App/Redux/AC/AuthActions';
import {
  getAccountDetails as getAccountDetailsAction
} from 'App/Redux/AC/AccountActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

type Props = {
  checkTokenAction: () => string,
  getAccountDetailsAction: () => Object
}

class AuthLoader extends React.Component<Props> {
  state = {
    redirectTo: ''
  }

  componentDidMount = async () => {
    const token = await this.props.checkTokenAction();
    let redirectTo = '';

    if(token) {
      const userDetails = await this.props.getAccountDetailsAction();
      if(userDetails) {
        redirectTo = '/account';
      }
    } else {
      redirectTo='/login';
    }

    this.setState({ redirectTo });
  }

  render () {
    const { redirectTo } = this.state;

    return (
      <div className={styles.wrapper}>
        <Loader color='orange'/>
        <h2>Загружаемс...</h2>
        {redirectTo && <Redirect to={redirectTo} />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: bindActionCreators(loginAction, dispatch),
    checkTokenAction: bindActionCreators(checkTokenAction, dispatch),
    getAccountDetailsAction: bindActionCreators(getAccountDetailsAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AuthLoader);
