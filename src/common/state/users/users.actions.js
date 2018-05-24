import createAsyncAction from '../../../createAsyncAction'; 
import HttpService from '../../services/http.service';
import ApiService from '../../services/api.service';

export const FETCH_USERS = 'FETCH_USERS';

export const FetchUsersAction = createAsyncAction(FETCH_USERS, () => {
  const options = ApiService.getOptions('fetchUsers');
  return HttpService.fetch(options);
});

