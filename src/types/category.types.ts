export type TCategory = 'food' | 'clothing' | 'electronic'

export interface ICategoryFilterItem {
	value: 'all' | 'electronics' | 'food' | 'clothing';
	name: string;
	icon: string;
}

export type ICategoryFilters = ICategoryFilterItem[];