import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

import NavbarLink from 'App/Components/NavbarLink';
import UserFrame from 'App/Components/NavbarUserFrame';

class Navbar extends React.PureComponent {
  render () {
    return (
      <Div className={styles.navbar}>
        <Div className={styles.left}>
          <NavbarLink main to='/dashboard'>Dashboard</NavbarLink>
          <NavbarLink to='/projects'>Projects</NavbarLink>
          <NavbarLink to='/tasks'>Tasks</NavbarLink>
        </Div>
        <Div className={styles.right}>
          <NavbarLink to='/account'><UserFrame /></NavbarLink>
        </Div>
        
      </Div>
    );
  }
}

export default Navbar;
