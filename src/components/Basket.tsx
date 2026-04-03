import { useActions } from "../hooks/useActions";
import { useBasket } from "../hooks/useBasket"
import { useBasketOverlay } from "../hooks/useBasketOverlay";
import { BasketItem } from "./BasketItem";

export const Basket = () => {
	const basket = useBasket()

	const { openBasket, closeBasket } = useBasketOverlay()

	const { deleteAllProductsBasket } = useActions()

	const totalPrice = basket.reduce((sum, prod) => sum + prod.price, 0)

	return (
		<>
			<button onClick={() => {
				openBasket()
			}
			}
				className='basket-icon'>🛒 Корзина
				<span className='basket-count' id='cartCount'>{basket.length}</span>
			</button>
			<div id="basketOverlay" onClick={closeBasket} className="basket-overlay"></div>
			<div id="basketSidebar" className="basket-sidebar">
				<div className="basket-header">
					<h3 className="basket-name">🛒 Корзина</h3>
					<button className="basket-close" onClick={closeBasket}>✕</button>
				</div>
				<div className="basket-items">
					{basket.map((product) => (
						<BasketItem product={product} />
					))}
				</div>
				<div className="basket-footer">
					<div className="basket-total">Итог: {totalPrice.toLocaleString()}</div>
					<button onClick={() => {
						deleteAllProductsBasket()
					}} className="clear-basket">Очистить корзину</button>
				</div>
			</div>
		</>
	)
}