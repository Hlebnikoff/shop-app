import React from "react";
import { useActions } from "../hooks/useActions";
import type { IProduct } from "../types/product.types"

interface BasketItemProps {
	product: IProduct
}

export const BasketItem = React.memo(({ product }: BasketItemProps) => {
	const { deleteFromBasket } = useActions();

	return (
		<div className="basket-item">
			<div className="basket-item-info">
				<div className="basket-item-name">{product.name}</div>
				<div className="basket-item-price">{product.price.toLocaleString()} ₽</div>
			</div>
			<button onClick={() => deleteFromBasket(product)} className="basket-item-remove">
				✕
			</button>
		</div>
	);
});