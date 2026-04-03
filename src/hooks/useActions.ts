import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { basketActions } from "../store/basket/basket.slice"

const rootActions = {
	...basketActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() =>
		bindActionCreators(rootActions, dispatch), [dispatch])
}