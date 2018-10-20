import * as React from 'react';
import Div from 'App/Components/Div';
import Navbar from 'App/Components/Navbar';
import FullscreenWrapper from 'App/Components/FullscreenWrapper';

import CenteredContainer from 'App/Components/CenteredContainer';
import Avatar from 'App/Components/Avatar';
import TextBlock from 'App/Components/TextBlock';
import styles from './styles.module.css';

// Redux
import {
  getAccountDetails as getAccountDetailsAction
} from 'App/Redux/AC/AccountActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

type Props = {
  getAccountDetailsAction: () => void
}

class Account extends React.Component<Props> {
  state = {
    account: {}
  }

  componentDidMount = async () => {
    const accountDetails = await this.props.getAccountDetailsAction();
    console.log('ACCOUNT: ', accountDetails);
    if(accountDetails) {
      this.setState({
        account: accountDetails.content
      });
    }
  }

  renderRoles = () => {
    const { account } = this.state;
    
    return account.roles && account.roles.map( (item, index) => {
      let add = '';
      if(index<account.roles.length-1) {
        add = ', ';
      }
      return <span key={item._id}>{item.name+add}</span>
    })
  }

  render () {
    const { account } = this.state;

    return (
      <FullscreenWrapper style={{justifyContent: 'flex-start'}}>
        <Navbar />
        <CenteredContainer className={styles.contentWrapper}>
          <Avatar source={account.avatar} size='large' className={styles.avatar} />
          <TextBlock
            type='header'
            className={styles.heading}
          >{account && (account.name && account.lastname) && `${account.name} ${account.lastname}`}</TextBlock>
          <TextBlock
            type='note'
            className={styles.roles}
          >{this.renderRoles()}</TextBlock>
          <TextBlock
            type='subnote'
            className={styles.description}
          >{account.description}</TextBlock>
          <TextBlock
            type='phone'
            className={styles.contact}
          >{account.phone}</TextBlock>
          <TextBlock
            type='email'
            className={styles.contact}
          >{account.email}</TextBlock>
        </CenteredContainer>
      </FullscreenWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAccountDetailsAction: bindActionCreators(getAccountDetailsAction, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Account);
