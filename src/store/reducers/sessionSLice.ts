import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Session {
  sessionId: string;
  // Add other session properties as needed
  [key: string]: any;
}

export interface SessionState {
  sessions: Session[] | null;
}

const initialState: SessionState = {
  sessions: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessions(state, action: PayloadAction<Session[] | null>) {
      state.sessions = action.payload;
    },
    deleteSessionAction(state, action: PayloadAction<string>) {
      if (state.sessions) {
        const index = state.sessions.findIndex(session => session.sessionId === action.payload);
        if (index !== -1) state.sessions.splice(index, 1);
      }
    },
  },
});

export const { setSessions, deleteSessionAction } = sessionSlice.actions;
export default sessionSlice.reducer;
