import { SORTS } from "../data/sorts.data"
import { type SortType } from "../types/sort.types"  // Добавьте импорт типа

type SortBarProps = {
	onSortChange: (sortValue: SortType) => void;  // Исправлено: SortType вместо string
	currentSort: SortType;                         // Исправлено: SortType вместо string
}

export const SortBar = ({ onSortChange, currentSort }: SortBarProps) => {
	return (
		<div className="sort-bar">
			<span>
				📦 Товары
			</span>
			<select
				className="sort-select"
				id="sortSelect"
				value={currentSort}
				onChange={(e) => onSortChange(e.target.value as SortType)}>  {/* Добавьте as SortType */}
				{SORTS.map((item) => (
					<option key={item.value} value={item.value}>{item.name}</option>
				))}
			</select>
		</div>
	)
}