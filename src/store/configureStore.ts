import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import tasks from './tasks';
import openedTasks from './openedTasks';
import finishedTasks from './finishedTasks';
import coutTasks from './coutTasks';
import theme from './theme';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({
  tasks,
  openedTasks,
  finishedTasks,
  coutTasks,
  theme,
});
const store = configureStore({ reducer, middleware });

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
