import { createSlice, Dispatch } from '@reduxjs/toolkit';

interface AsyncSlice {
  name: string;
  initialState: object;
  reducers: object;
  fetchConfig: Function;
}

const createAsyncSlice = (config: AsyncSlice) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      resetState(state) {
        state.loading = false;
        state.data = null;
        state.error = null;
      },
      ...config.reducers,
    },
  });

  const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
  const asyncAction = (payload: any) => async (dispatch: Dispatch) => {
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
