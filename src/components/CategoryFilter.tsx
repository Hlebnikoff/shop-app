import { CATIGORIES } from "../data/categories.data"

type CategoryFilterProps = {
	onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ onCategoryChange }:CategoryFilterProps) => {
	return (
		<div className="category-filter">
			<h3 className="category-title">Категории</h3>
			<div className="category-list">

				{CATIGORIES.map((item) => (
					<button onClick={() => {
						onCategoryChange(item.value)
					}}
						key={item.value} className="category-item">
						<span>{item.icon}</span>
						<span>{item.name}</span>
					</button>
				))}
			</div>
		</div>
	)
}