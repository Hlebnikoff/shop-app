import { useMemo } from "react";
import { useActions } from "../hooks/useActions";
import { useBasket } from "../hooks/useBasket";
import { useProducts } from "../hooks/useProducts";
import type { SortType } from "../types/sort.types";
import { sortProducts } from "../utils/sortProducts";

type ProductsListProps = {
	selectedCategory: string;
	currentSort: SortType;
};

export const ProductsList = ({ selectedCategory, currentSort }: ProductsListProps) => {
	const basket = useBasket();
	const { products, loading, error } = useProducts();
	const { addToBasket } = useActions();

	const isExist = (productId: number) => {
		return basket.some(p => p.id === productId);
	};

	const filteredProducts = useMemo(() => {
		return selectedCategory === 'all'
			? [...products]
			: products.filter(product => product.categoryValue === selectedCategory);
	}, [selectedCategory, products]);

	const sortedProducts = useMemo(() => {
		return sortProducts(filteredProducts, currentSort);
	}, [filteredProducts, currentSort]);

	if (loading) {
		return (
			<div className="products-list">
				<div className="loading">Загрузка товаров...</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="products-list">
				<div className="error">Ошибка: {error}</div>
			</div>
		);
	}

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
									addToBasket(product);
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
	);
};