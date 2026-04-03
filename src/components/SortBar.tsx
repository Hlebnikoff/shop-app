import { SORTS } from "../data/sorts.data"

type SortBarProps = {
	onSortChange: (sortValue: string) => void;
	currentSort: string;
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
				onChange={(e) => onSortChange(e.target.value)}>
				{SORTS.map((item) => (
					<option key={item.value} value={item.value}>{item.name}</option>
				))}
			</select>
		</div>
	)
}