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

export const setContractStatus = (status) => {
  return async dispatch => {
    try {
      dispatch(setVerifyStatus(status));
    } catch (error) {
      console.log(error);
    }
  }
}

export default contract.reducer;