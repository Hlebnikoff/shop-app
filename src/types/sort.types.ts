export const SORT_TYPES = {
	NAME_ASC: 'name-asc',
	NAME_DESC: 'name-desc',
	PRICE_ASC: 'price-asc',
	PRICE_DESC: 'price-desc'
} as const

export type SortType = typeof SORT_TYPES[keyof typeof SORT_TYPES]