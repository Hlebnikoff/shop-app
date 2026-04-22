import { type SortType } from "../types/sort.types"
import type { IProduct } from "../types/product.types"

export const sortProducts = (products: IProduct[], sortType: SortType): IProduct[] => {
	const sortedProducts = [...products]

	switch (sortType) {
		case 'name-asc':
			return sortedProducts.sort((a, b) => a.name.localeCompare(b.name))

		case 'name-desc':
			return sortedProducts.sort((a, b) => b.name.localeCompare(a.name))

		case 'price-asc':
			return sortedProducts.sort((a, b) => a.price - b.price)

		case 'price-desc':
			return sortedProducts.sort((a, b) => b.price - a.price)

		default:
			return sortedProducts
	}
}