import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

import NavbarLink from 'App/Components/NavbarLink';

class Navbar extends React.PureComponent {
  render () {
    return (
      <Div className={styles.navbar}>
        <NavbarLink main to='/dashboard'>Dashboard</NavbarLink>
        <NavbarLink to='/projects'>Projects</NavbarLink>
        <NavbarLink to='/tasks'>Tasks</NavbarLink>
        <NavbarLink to='/account'>MyAccount</NavbarLink>
      </Div>
    );
  }
}

export default Navbar;
