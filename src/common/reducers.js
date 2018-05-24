import { combineReducers } from 'redux';
import authReducer from './state/auth/auth.reducer';
import sharedReducer from './state/shared/shared.reducer';
import dialogReducer from './state/dialog/dialog.reducer';
import drawerReducer from './state/drawer/drawer.reducer';
import usersReducer from './state/users/users.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  shared: sharedReducer,
  dialog: dialogReducer,
  drawer: drawerReducer,
  users: usersReducer
});

export default rootReducer;
