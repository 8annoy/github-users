import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui';


const UsersListCompnent = (props) => {
  
  return <List>
    {
      props.users.map((user, i) => 
        <div key={i}>
          {user.name}
        </div>
      )
    }
  </List>
}

UsersListCompnent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
}

export default UsersListCompnent;