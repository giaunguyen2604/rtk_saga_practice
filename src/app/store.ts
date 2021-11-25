import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { history } from "utils";
import authReducer from "features/auth/authSlice";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware(history)),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
