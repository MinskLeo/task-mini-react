import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

type Props = {
  children: any,
  style: Object | string
}

class FullscreenWrapper extends React.PureComponent<Props> {
  render () {
    const { children, style } = this.props;

    return <Div className={styles.fullscreenContainer} style={style}>
      {children}
    </Div>
  }
}

export default FullscreenWrapper;
