import { createSlice } from "@reduxjs/toolkit";

import api from '../utils/api';

const initialState = {
  verified: false,
  date: null,
  countData: null
}

const contract = createSlice({
  name: "contract",
  initialState: initialState,
  reducers: {
    setVerifyStatus(state, action) {
      state.verified = action.payload;
    },
    setContractDate(state, action) {
      state.date = action.payload;
    },
    setCountData(state, action) {
      state.countData = action.payload;
    },
  }
});

export const { setVerifyStatus, setContractDate, setCountData } = contract.actions;

export const getContractDate = (reqData) => {
  return async dispatch => {
    try {
      const res = await api.post('/v1/analysis', JSON.stringify(reqData));

      console.log(res.data);
      dispatch(setContractDate(res.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const getContractBal = (reqData) => {
  return async dispatch => {
    try {
      const res = await api.post('/v2/analysis/count', JSON.stringify(reqData));

      console.log(res.data);
      dispatch(setCountData(res.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default contract.reducer;