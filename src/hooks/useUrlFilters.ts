import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import type { SortType } from '../types/sort.types';

export const useUrlFilters = (
	onCategoryChange: (category: string) => void,
	onSortChange: (sort: SortType) => void
) => {
	const [searchParams, setSearchParams] = useSearchParams();

	// Читаем параметры из URL при первой загрузке
	useEffect(() => {
		const categoryParam = searchParams.get('category');
		const sortParam = searchParams.get('sort');

		if (categoryParam) {
			onCategoryChange(categoryParam);
		}

		if (sortParam && isValidSortType(sortParam)) {
			onSortChange(sortParam as SortType);
		}
	}, []); // Только при монтировании

	// Функция для обновления URL при изменении категории
	const updateCategoryParam = useCallback((category: string) => {
		setSearchParams(prev => {
			const newParams = new URLSearchParams(prev);
			if (category === 'all') {
				newParams.delete('category');
			} else {
				newParams.set('category', category);
			}
			return newParams;
		});
		onCategoryChange(category);
	}, [onCategoryChange, setSearchParams]);

	// Функция для обновления URL при изменении сортировки
	const updateSortParam = useCallback((sort: SortType) => {
		setSearchParams(prev => {
			const newParams = new URLSearchParams(prev);
			if (sort === 'name-asc') {
				newParams.delete('sort');
			} else {
				newParams.set('sort', sort);
			}
			return newParams;
		});
		onSortChange(sort);
	}, [onSortChange, setSearchParams]);

	return { updateCategoryParam, updateSortParam };
};

// Вспомогательная функция для проверки валидности sort параметра
const isValidSortType = (value: string): boolean => {
	return ['name-asc', 'name-desc', 'price-asc', 'price-desc'].includes(value);
};