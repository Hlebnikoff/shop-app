import { useCallback } from 'react';
import { useBasket } from "../hooks/useBasket"
import { useBasketOverlay } from "../hooks/useBasketOverlay";
import { BasketItem } from "./BasketItem";
import { basketActions } from '../store/basket/basket.slice';
import { useDispatch } from 'react-redux';

export const Basket = () => {
	const basket = useBasket()

	const dispatch = useDispatch()

	const { isOpen, openBasket, closeBasket } = useBasketOverlay()

	const handleDeleteAll = () => {
		dispatch(basketActions.deleteAllProductsBasket())
	}

	const totalPrice = basket.reduce((sum, prod) => sum + prod.price, 0)

	const renderBasketItem = useCallback((product: { id: number; name: string; price: number }) => (
		<BasketItem
			key={product.id}
			id={product.id}
			name={product.name}
			price={product.price}
		/>
	), []);

	return (
		<>
			<button onClick={openBasket}
				className='basket-icon'>🛒 Корзина
				<span className='basket-count' id='cartCount'>{basket.length}</span>
			</button>
			<div id="basketOverlay" onClick={closeBasket} className={`basket-overlay ${isOpen ? 'open' : ''}`}></div>
			<div id="basketSidebar" className={`basket-sidebar ${isOpen ? 'open' : ''}`}>
				<div className="basket-header">
					<h3 className="basket-name">🛒 Корзина</h3>
					<button className="basket-close" onClick={closeBasket}>✕</button>
				</div>
				<div className="basket-items">
					{basket.length === 0 ? (
						<div className="basket-empty">Корзина пуста</div>
					) : (
						basket.map(renderBasketItem)
					)}
				</div>
				<div className="basket-footer">
					<div className="basket-total">Итог: {totalPrice.toLocaleString()} ₽</div>
					{basket.length > 0 && (
						<button onClick={handleDeleteAll} className="clear-basket">
							Очистить корзину
						</button>
					)}
				</div>
			</div>
		</>
	)
}