import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  onClick: () => void,
  children: any,
  disabled?: boolean
}

class Button extends React.PureComponent<Props> {
  render () {
    const { children, onClick, disabled } = this.props;

    return <button disabled={disabled} onClick={onClick} className={`${styles.button} ${disabled ? styles.disabled : ''}`}>{children}</button>
  }
}

export default Button;
