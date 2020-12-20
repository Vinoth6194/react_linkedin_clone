import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export const selectuser = (state) => state.user.value;

export default userSlice.reducer;
