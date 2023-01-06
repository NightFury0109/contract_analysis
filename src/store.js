import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import logger from "redux-logger";

import contract from './action/contract';

let middleware = getDefaultMiddleware => getDefaultMiddleware();
// let middleware = getDefaultMiddleware => getDefaultMiddleware().concat(logger);

const rootReducer = combineReducers({
  contract: contract
});

const store = configureStore({
  middleware,
  reducer: rootReducer
});

export default store;
