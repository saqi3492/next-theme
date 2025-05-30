import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SnackbarObj {
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
}

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
    clearSnackbarObj(state) {
      state.snackbarObj = null;
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
export const { setSnackbarObj, clearSnackbarObj, showLoadingBackdrop, hideLoadingBackdrop, setShowBeatLoader, setHideBeatLoader } = alertsSlice.actions;
