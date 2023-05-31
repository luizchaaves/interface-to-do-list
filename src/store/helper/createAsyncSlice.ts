import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../configureStore';

interface AsyncSlice {
  name: string;
  initialState?: object;
  reducers?: object;
  fetchConfig: Function;
}

const createAsyncSlice = (config: AsyncSlice) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: {},
      error: '',
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action: PayloadAction<any>) {
        state.loading = false;
        state.data = action.payload;
        state.error = '';
      },
      fetchError(state, action: PayloadAction<any>) {
        state.loading = false;
        state.data = {};
        state.error = action.payload;
      },
      resetState(state) {
        state.loading = false;
        state.data = {};
        state.error = '';
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
  const asyncAction =
    (payload: any | undefined) => async (dispatch: AppDispatch) => {
      try {
        dispatch(fetchStarted());
        const { url, options } = config.fetchConfig(payload);
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok === false) throw new Error(data.message);
        return dispatch(fetchSuccess(data));
      } catch (error: any) {
        return dispatch(fetchError(error.message));
      }
    };

  return { ...slice, asyncAction };
};

export default createAsyncSlice;
