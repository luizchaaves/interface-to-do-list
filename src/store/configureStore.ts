import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import tasks from './tasks';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ tasks });
const store = configureStore({ reducer, middleware });

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
