import initialUsersState from './users.state';
import { FETCH_USERS } from './users.actions';
import { SUCCESS_SUFFIX } from '../../constants';

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case `${FETCH_USERS}${SUCCESS_SUFFIX}`:
      return {...state, usersList: action.payload};
  
    default:
      return state;
  }
}

export default usersReducer;