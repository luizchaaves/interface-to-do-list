import createAsyncSlice from './helper/createAsyncSlice';
import { GET_TASKS } from '../services/api';

const slice = createAsyncSlice({
  name: 'tasksGet',
  fetchConfig: () => GET_TASKS(),
});

export const tasksGet = slice.asyncAction;
export default slice.reducer;
