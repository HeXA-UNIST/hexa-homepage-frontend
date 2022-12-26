import { configureStore, combineReducers } from "@reduxjs/toolkit";

import loginReducer from "features/auth/reducers/login_reducer";


export const rootReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
