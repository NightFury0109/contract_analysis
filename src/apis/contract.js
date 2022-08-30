import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verified: false
}

const contract = createSlice({
  name: "contract",
  initialState: initialState,
  reducers: {
    setVerifyStatus(state, action) {
      state.verified = action.payload
    }
  }
});

export const { setVerifyStatus } = contract.actions;

export default contract.reducer;