import createAsyncSlice from './helper/createAsyncSlice';
import { GET_FINISHED_TASKS } from '../services/api';

const slice = createAsyncSlice({
  name: 'finishedTasksGet',
  fetchConfig: () => GET_FINISHED_TASKS(),
});

export const finishedTasksGet = slice.asyncAction;
export default slice.reducer;
