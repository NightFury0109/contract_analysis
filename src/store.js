import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import logger from "redux-logger";

import api from "./apis/api";
import contract from './apis/contract';

let middleware = getDefaultMiddleware => getDefaultMiddleware();
// let middleware = getDefaultMiddleware => getDefaultMiddleware().concat(logger);

const rootReducer = combineReducers({
  api: api,
  contract: contract
});

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;
