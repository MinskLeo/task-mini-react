import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

type Props = {
  source: string,
  size: 'large' | 'navbar' | 'listitem',
  className: string
}

class Avatar extends React.PureComponent<Props> {
  render () {
    const { source, size, className } = this.props;

    return (
      <Div className={[styles.avatarWrapper, className, size === 'navbar' && styles.avatarUserFrame]}>
        <img src={source} className={styles.avatar} alt='avatar' />
      </Div>
    );
  }
}

export default Avatar;
