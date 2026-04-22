import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./basket/basket.slice";
import { productsReducer } from "./product/product.slice";


const reducers = combineReducers({
	basket: basketReducer,
	products: productsReducer,
});

export const store = configureStore({
	reducer: reducers
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;