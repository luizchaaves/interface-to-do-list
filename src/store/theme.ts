import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

interface InitialState {
  theme: Theme;
}

const getInitialTheme = (): Theme => {
  const storageTheme = localStorage.getItem('theme');
  if (storageTheme && (storageTheme === 'light' || storageTheme === 'dark'))
    return storageTheme;
  return 'light';
};

const initialState: InitialState = {
  theme: getInitialTheme(),
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { switchTheme } = slice.actions;
export default slice.reducer;
