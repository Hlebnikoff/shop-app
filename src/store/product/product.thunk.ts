import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IProduct } from "../../types/product.types";
import { api } from "../../api/axois.config";

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