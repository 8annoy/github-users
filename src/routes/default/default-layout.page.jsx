import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import styles from './default-layout.page.scss';
import HeaderComponent from '../../features/components/header/header.component.jsx';

const DefaultLayout = ({ render: Component, ...rest }) => ({
  render () {
    const { loggedInUser, path, getTitle } = this.props;

    return (      
      <Route
          {...rest}
          render={matchProps => (
            <div>
              <HeaderComponent path={rest.path} title={getTitle(path)} />
              <div className={styles.wrapper}>
                <Component {...matchProps} t={rest.t} />
              </div>
            </div>
          )}
        />

    );
  }
});

function mapStateToProps (state) {
  return {
    loggedInUser: state.auth.loggedInUser,
    getTitle: state.shared.getTitle
  };
}

export default translate()(connect(mapStateToProps)(DefaultLayout));
