import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userDetail: any;
}

const initialState: UserState = {
  userDetail: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetail(state, action: PayloadAction<any>) {
      state.userDetail = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserDetail } = userSlice.actions;
