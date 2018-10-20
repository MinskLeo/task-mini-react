import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

type Props = {
  children: any,
  maxWidth?: number,
  maxHeight?: number,
  width?: number,
  height?: number,
  className?: string
}

class CenteredContainer extends React.PureComponent<Props> {
  render () {
    const { children, className } = this.props;

    return (
      <Div className={styles.centeredContainerWrapper}>
        <Div className={[styles.content, className]}>
          {children}
        </Div>
      </Div>
    );
  }
}

export default CenteredContainer;
