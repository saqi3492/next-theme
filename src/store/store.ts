import { configureStore } from '@reduxjs/toolkit';
import User from '@/store/reducers/userSlice';
import Alerts from '@/store/reducers/alertsSlice';
import ThemeOptions from '@/store/reducers/themeOptionsSlice';
import MasterData from '@/store/reducers/masterDataSlice';
import Session from '@/store/reducers/sessionSLice';

const store = configureStore({
  reducer: { User, Alerts, ThemeOptions, MasterData, Session },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch, getState } = store;
export default store;
