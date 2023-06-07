import createAsyncSlice from './helper/createAsyncSlice';
import { GET_COUNT_TASKS } from '../services/api';

const slice = createAsyncSlice({
  name: 'countTasksGet',
  fetchConfig: () => GET_COUNT_TASKS(),
});

export const countTasksGet = slice.asyncAction;
export default slice.reducer;
