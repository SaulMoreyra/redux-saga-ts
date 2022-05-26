import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  loading: "",
  success: ""
};

const someSlice = createSlice({
  name: "someSlice",
  initialState,
  reducers: {
    actionForm: (state, { payload }) => {
      state.email = payload.email;
      state.password = payload.password;
      return state;
    },
    actionLoading: (state, { payload }) => {
      state.loading = payload;
      return state;
    },
    actionSuccess: (state, { payload }) => {
      state.success = payload;
      return state;
    },
    reset: (state) => initialState
  }
});

export const slices = someSlice.actions;
const someReducer = someSlice.reducer;
export default someReducer;
