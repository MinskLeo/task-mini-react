import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

type Props = {
  type?: 'password' | 'email' | 'text' | 'number',
  value: string,
  placeholder?: string,
  maxLength?: number,
  minLength?: number,
  validationFunction?: (text: string) => { isValid: boolean, message: string },
  onChange: (text: string)=> void
}

class TextInput extends React.Component<Props> {
  state = {
    message: ''
  }

  onChange = event => {
    const { validationFunction } = this.props;
    const text = event.target.value;
    let message = null;

    if(validationFunction) {
      const validity = validationFunction(text);
      if(validity.isValid) {
        message=null;
      } else {
        message=validity.message;
      }
      this.props.onChange(text);
      this.setState({ message });
    } else {
      this.props.onChange(text);
    }
  }

  render () {
    const { type, value, placeholder, maxLength, minLength } = this.props;
    const { message } = this.state;

    return (
      <Div className={[
        styles.inputContainer,
        message ? styles.inputContainerError : styles.inputContainerValid,
        value.length===0 && styles.inputContainerGray]}>
        <input
          className={styles.input}
          type={type || 'text'}
          onChange={this.onChange}
          value={value}
          placeholder={placeholder}
          minLength={minLength || 0}
          maxLength={maxLength || null}
        />
      </Div>
    );
  }
}

export default TextInput;
