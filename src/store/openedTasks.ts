import createAsyncSlice from './helper/createAsyncSlice';
import { GET_OPENED_TASKS } from '../services/api';

const slice = createAsyncSlice({
  name: 'openedTasksGet',
  fetchConfig: () => GET_OPENED_TASKS(),
});

export const openedTasksGet = slice.asyncAction;
export default slice.reducer;
