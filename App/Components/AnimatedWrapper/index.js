import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './styles.module.css';

type Props = {
  children: any
}

class AnimatedWrapper extends React.PureComponent<Props> {
  render () {
    const { children } = this.props;

    return (
      <CSSTransition
        in={true}
        classNames={{
          enter: styles.animationEnter,
          enterActive: styles.animationEnterActive,
          appear: styles.animationEnter,
          appearActive: styles.animationEnterActive,
          exit: styles.animationLeave,
          exitActive: styles.animationLeaveActive
        }}
        timeout={500}
        appear
      >
        {children}
      </CSSTransition>
    );
  }
}

export default AnimatedWrapper;
