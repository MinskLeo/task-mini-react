import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  color: string
}

class Loader extends React.PureComponent<Props> {
  render () {
    const { color } = this.props;
    const style = {
      backgroundColor: color
    }

    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
          <div style={style} />
        </div>
      </div>
    );
  }
}

export default Loader;
