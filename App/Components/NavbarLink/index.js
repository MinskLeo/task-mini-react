import * as React from 'react';
import styles from './styles.module.css';

import {
  Link
} from 'react-router-dom';

type Props = {
  to: string,
  main: boolean,
  children: any
}

class NavbarLink extends React.PureComponent<Props> {
  render() {
    const { to, main, children } = this.props;

    return <Link to={to} className={`${styles.link} ${main && styles.linkMain}`}>{children}</Link>;
  }
}

export default NavbarLink;
