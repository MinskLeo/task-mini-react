import * as React from 'react';
import FullscreenBackgroundImage from 'App/Components/FullscreenBackgroundImage';
import styles from './styles.module.css';
import { Redirect } from 'react-router-dom';

// Components
import TextInput from 'App/Components/Form/TextInput';
import Button from 'App/Components/Form/Button';

// Configs
import ValidationConfig from 'App/Configs/validation';

// Redux
import {
  login as loginAction
} from 'App/Redux/AC/AuthActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

type Props = {
  loginAction: () => void
}

class LoginPage extends React.Component<Props> {
  state = {
    nickname: '',
    password: '',
    nicknameValid: false,
    passwordValid: false,

    redirectToAccount: false
  }

  onChangeNickname = text => {
    this.setState({
      nickname: text
    });
  }

  onChangePassword = text => {
    this.setState({
      password: text
    });
  }

  validateNickname = (text): { isValid: boolean, message: string } => {
    const reg = `^[a-zA-Z]{${ValidationConfig.MIN_NICKNAME},${ValidationConfig.MAX_NICKNAME}}$`;
    const regXP = new RegExp(reg, 'i');
    const badContent = !regXP.exec(text)

    if (badContent) {
      this.setState({
        nicknameValid: false
      });
      return {
        isValid: false,
        message: 'Bad value'
      }
    }else {
      this.setState({
        nicknameValid: true
      });
      return {
        isValid: true
      }
    }
  }

  validatePassword = (text): { isValid: boolean, message: string } => {
    const reg = `^[a-zA-Z0-9@_-]{${ValidationConfig.MIN_PASSWORD},${ValidationConfig.MAX_PASSWORD}}$`;
    const regXP = new RegExp(reg, 'i');
    const badContent = !regXP.exec(text)


    if (badContent) {
      this.setState({
        passwordValid: false
      });
      return {
        isValid: false,
        message: 'Bad value'
      }
    } else {
      this.setState({
        passwordValid: true
      });
      return {
        isValid: true
      }
    }
  }

  onSubmitPress = async () => {
    const { nickname, password } = this.state;
    const data = { nickname, password }
    const result = await this.props.loginAction(data);
    if(result) {
      this.setState({ redirectToAccount: true });
    }
  }


  render () {
    const { redirectToAccount } = this.props;

    return (
      <FullscreenBackgroundImage
        source='http://hdqwalls.com/wallpapers/peyto-lake-canada-mountains-4k-tj.jpg' maskColor='rgb(211, 211, 211,0.3)'
        className={styles.content}
      >
        <TextInput
          validationFunction={this.validateNickname}
          onChange={this.onChangeNickname}
          value={this.state.nickname}
          placeholder='Nickname'
          minLength={ValidationConfig.MIN_NICKNAME}
          maxLength={ValidationConfig.MAX_NICKNAME}
        />
        <TextInput
          validationFunction={this.validatePassword}
          onChange={this.onChangePassword}
          value={this.state.password}
          placeholder='Password'
          minLength={ValidationConfig.MIN_PASSWORD}
          maxLength={ValidationConfig.MAX_PASSWORD}
          type='password'
        />
        <Button
          disabled={!this.state.nicknameValid || !this.state.passwordValid}
          onClick={this.onSubmitPress}
        >Button!</Button>
        {redirectToAccount && <Redirect to='/account' />}
      </FullscreenBackgroundImage>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: bindActionCreators(loginAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
