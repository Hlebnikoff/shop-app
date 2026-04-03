import { useSelector } from "react-redux"
import type { TRootState } from "../store/store"

export const useBasket = () => {
	const basket = useSelector((state: TRootState) => state.basket.items)

	return basket
}