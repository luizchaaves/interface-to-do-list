import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({});
const store = configureStore({ reducer, middleware });

export default store;
