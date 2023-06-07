import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import tasks from './tasks';
import openedTasks from './openedTasks';
import finishedTasks from './finishedTasks';
import coutTasks from './coutTasks';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({
  tasks,
  openedTasks,
  finishedTasks,
  coutTasks,
});
const store = configureStore({ reducer, middleware });

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
