import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

type Props = {
  children: any,
  style: Object | string,
  className: string
}

class FullscreenWrapper extends React.PureComponent<Props> {
  render () {
    const { children, style, className } = this.props;

    return <Div className={[styles.fullscreenContainer, className]} style={style}>
      {children}
    </Div>
  }
}

export default FullscreenWrapper;
