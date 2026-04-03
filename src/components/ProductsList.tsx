import { PRODUCTS } from "../data/products.data"
import { useActions } from "../hooks/useActions"
import { useBasket } from "../hooks/useBasket"
import { useMemo } from "react"

type ProductsListProps = {
	selectedCategory: string;
	currentSort: string;  // Добавляем пропс для сортировки
}

export const ProductsList = ({ selectedCategory, currentSort }: ProductsListProps) => {
	const basket = useBasket()
	const { addToBasket } = useActions()

	const isExist = (productId: number) => {
		return basket.some(p => p.id === productId)
	}

	const filteredProducts = useMemo(() => {
		return selectedCategory === 'all'
			? [...PRODUCTS]
			: PRODUCTS.filter(product => product.categoryValue === selectedCategory)
	}, [selectedCategory])

	const sortedProducts = useMemo(() => {
		const products = [...filteredProducts]

		switch (currentSort) {
			case 'name-asc':
				return products.sort((a, b) => a.name.localeCompare(b.name))
			case 'name-desc':
				return products.sort((a, b) => b.name.localeCompare(a.name))
			case 'price-asc':
				return products.sort((a, b) => a.price - b.price)
			case 'price-desc':
				return products.sort((a, b) => b.price - a.price)
			default:
				return products
		}
	}, [filteredProducts, currentSort])

	return (
		<div className="products-list">
			{sortedProducts.length === 0 ? (
				<div className="no-products">Товары не найдены</div>
			) : (
				sortedProducts.map((product) => (
					<div key={product.id} className="product-card">
						<div className="product-image">{product.image}</div>
						<div className="product-info">
							<div className="product-name">{product.name}</div>
							<div className="product-price">{product.price.toLocaleString()} ₽</div>
							<div className="product-category">{product.category}</div>
							<button
								disabled={isExist(product.id)}
								onClick={() => {
									addToBasket(product)
								}}
								className="add-to-cart"
							>
								{isExist(product.id) ? '✓ В корзине' : '🛒 В корзину'}
							</button>
						</div>
					</div>
				))
			)}
		</div>
	)
}