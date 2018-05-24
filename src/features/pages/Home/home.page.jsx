import React, {Component} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { translate } from 'react-i18next';
import styles from './home.page.scss';
import UsersListCompnent from '../../components/users-list/users-list.component.jsx';
import {FetchUsersAction} from '../../../common/state/users/users.actions';

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(new FetchUsersAction())
  }

  render() {
    return (
      <div className={styles.homePage}>
        {this.props.users && <UsersListCompnent users={this.props.users} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.usersList
  }
}

HomePage.propTypes = {
  
};

export default connect(mapStateToProps)(HomePage);
