import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeOptionsState {
  sidebarCompact: boolean;
}

const initialState: ThemeOptionsState = {
  sidebarCompact: false,
};

export const themeOptionsSlice = createSlice({
  name: 'themeOptions',
  initialState,
  reducers: {
    setSidebarCompact: (state) => {
      state.sidebarCompact = !state.sidebarCompact;
    },
  },
});

export const { setSidebarCompact } = themeOptionsSlice.actions;
export default themeOptionsSlice.reducer;
