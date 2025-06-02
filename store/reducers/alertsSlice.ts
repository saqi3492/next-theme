import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SnackbarObj = {
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
} | null;
export interface AlertsState {
  snackbarObj: SnackbarObj | null;
  loadingBackdrop: number;
  beatLoader: number;
}

const initialState: AlertsState = {
  snackbarObj: null,
  loadingBackdrop: 0,
  beatLoader: 0,
};

const alertsSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setSnackbarObj(state, action: PayloadAction<SnackbarObj>) {
      state.snackbarObj = action.payload;
    },
    showLoadingBackdrop(state) {
      state.loadingBackdrop += 1;
    },
    hideLoadingBackdrop(state) {
      state.loadingBackdrop -= 1;
    },
    setShowBeatLoader(state) {
      state.beatLoader += 1;
    },
    setHideBeatLoader(state) {
      state.beatLoader -= 1;
    },
  },
});

export default alertsSlice.reducer;
export const { setSnackbarObj, showLoadingBackdrop, hideLoadingBackdrop, setShowBeatLoader, setHideBeatLoader } = alertsSlice.actions;
