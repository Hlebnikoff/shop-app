import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/product.types";
import { api } from "../../api/axois.config";

interface ProductsState {
	items: IProduct[];
	loading: boolean;
	error: string | null;
}

const initialState: ProductsState = {
	items: [],
	loading: false,
	error: null
};

export const fetchProducts = createAsyncThunk(
	'products/fetch',
	async (_, { rejectWithValue }) => {
		try {
			const response = await api.get<IProduct[]>('/products');
			return response.data;
		} catch {
			return rejectWithValue('Ошибка загрузки товаров');
		}
	}
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const productsReducer = productsSlice.reducer;