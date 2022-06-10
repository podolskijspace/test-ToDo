import { createSlice } from '@reduxjs/toolkit';

export const mainDataReducer = createSlice({
  name: 'mainData',
  initialState: {
    selectUser: null
  },

  reducers: {
    setUser: (state, item) => {
      state.selectUser = item.payload;
    },
  },
});

export const { setUser } = mainDataReducer.actions;

export default mainDataReducer.reducer;