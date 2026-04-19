import React from "react";
import { useActions } from "../hooks/useActions";

interface BasketItemProps {
	id: number;
	name: string;
	price: number;
}

export const BasketItem = React.memo(({ id, name, price }: BasketItemProps) => {
	const { deleteFromBasket } = useActions();

	const handleDelete = React.useCallback(() => {
		deleteFromBasket(id); // только id
	}, [deleteFromBasket, id]);

	return (
		<div className="basket-item">
			<div className="basket-item-info">
				<div className="basket-item-name">{name}</div>
				<div className="basket-item-price">{price.toLocaleString()} ₽</div>
			</div>
			<button onClick={handleDelete} className="basket-item-remove">
				✕
			</button>
		</div>
	);
});

BasketItem.displayName = 'BasketItem';