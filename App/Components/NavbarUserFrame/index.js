import * as React from 'react';
import Div from 'App/Components/Div';
import styles from './styles.module.css';

import Avatar from 'App/Components/Avatar';
import TextBlock from 'App/Components/TextBlock';

// Redux
import { connect } from 'react-redux';

type Props = {
  account: Object
}

class NavbarUserFrame extends React.Component<Props> {
  render () {
    const { account } = this.props;

    return (
      <Div className={styles.userFrameWrapper}>
        <Div className={styles.avatarContainer}>
            <Avatar
              source='https://pp.userapi.com/c836730/v836730182/59aa7/vQc0aZTuKto.jpg'
              size='navbar'
            />
        </Div>
        <Div className={styles.textContainer}>
          <TextBlock className={styles.textLabel}>MinskLeo</TextBlock>
        </Div>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps, null)(NavbarUserFrame);
