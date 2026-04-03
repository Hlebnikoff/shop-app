import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basket/basket.slice";

const redusers = combineReducers({
	basket: basketReducer,
})

export const store = configureStore({
	reducer: redusers
})

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;