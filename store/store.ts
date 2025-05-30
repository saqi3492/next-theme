import { configureStore } from '@reduxjs/toolkit';
import User from './reducers/userSlice';
import Alerts from './reducers/alertsSlice';
import ThemeOptions from './reducers/themeOptionsSlice';
import MasterData from './reducers/masterDataSlice';
import Session from './reducers/sessionSLice';

const store = configureStore({
  reducer: { User, Alerts, ThemeOptions, MasterData, Session },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch, getState } = store;
export default store;
