import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MasterDataState {
  countries: string[];
}

const initialState: MasterDataState = {
  countries: [],
};

const masterDataSlice = createSlice({
  name: 'masterData',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<string[]>) => {
      state.countries = action.payload;
    },
  },
});

export const { setCountries } = masterDataSlice.actions;
export default masterDataSlice.reducer;
