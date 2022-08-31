import { createSlice } from "@reduxjs/toolkit";

import api from '../utils/api';

const initialState = {
  verified: false,
  data: null
}

const contract = createSlice({
  name: "contract",
  initialState: initialState,
  reducers: {
    setVerifyStatus(state, action) {
      state.verified = action.payload;
    },
    setContractData(state, action) {
      state.data = action.payload;
    }
  }
});

export const { setVerifyStatus, setContractData } = contract.actions;

export const getContractData = (reqData) => {
  return async dispatch => {
    try {
      const res = await api.post('/v1/analysis', JSON.stringify(reqData));

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default contract.reducer;