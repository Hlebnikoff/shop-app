import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/product.types";

interface BasketState {
	items: IProduct[];
	loading: boolean;
	error: string | null;
}

const getInitialBasket = (): BasketState => {
	const savedBasket = localStorage.getItem('basket_items');
	return {
		items: savedBasket ? JSON.parse(savedBasket) : [],
		loading: false,
		error: null
	};
};

const initialState: BasketState = getInitialBasket();

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			const product = action.payload;
			state.items.push(product);

			localStorage.setItem('basket_items', JSON.stringify(state.items));
		},

		deleteFromBasket: (state, action) => {
			const product = action.payload;
			state.items = state.items.filter(p => p.id !== product.id);

			localStorage.setItem('basket_items', JSON.stringify(state.items));
		},

		deleteAllProductsBasket: (state) => {
			state.items = [];

			localStorage.setItem('basket_items', JSON.stringify(state.items));
		}
	},
})

export const basketActions = basketSlice.actions;
export const basketReducer = basketSlice.reducer;