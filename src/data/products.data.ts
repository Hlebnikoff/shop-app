import type { IProduct } from "../types/product.types";

export const PRODUCTS: IProduct[] = [
	{ id: 1, name: "Пицца Маргарита", price: 450, categoryValue: 'food', category: "🍕 Еда", image: "🍕" },
	{ id: 2, name: "Суши Филадельфия", price: 650, categoryValue: 'food', category: "🍕 Еда", image: "🍣" },
	{ id: 3, name: "Бургер Классик", price: 320, categoryValue: 'food', category: "🍕 Еда", image: "🍔" },
	{ id: 4, name: "Паста Карбонара", price: 380, categoryValue: 'food', category: "🍕 Еда", image: "🍝" },
	{ id: 5, name: "Салат Цезарь", price: 290, categoryValue: 'food', category: "🍕 Еда", image: "🥗" },
	{ id: 6, name: "Стейк Рибай", price: 890, categoryValue: 'food', category: "🍕 Еда", image: "🥩" },
	// Одежда
	{ id: 7, name: "Футболка хлопок", price: 1200, categoryValue: 'clothing', category: "👕 Одежда", image: "👕" },
	{ id: 8, name: "Джинсы классические", price: 3500, categoryValue: 'clothing', category: "👕 Одежда", image: "👖" },
	{ id: 9, name: "Куртка кожаная", price: 8900, categoryValue: 'clothing', category: "👕 Одежда", image: "🧥" },
	{ id: 10, name: "Кроссовки Nike", price: 6500, categoryValue: 'clothing', category: "👕 Одежда", image: "👟" },
	{ id: 11, name: "Свитер уютный", price: 2800, categoryValue: 'clothing', category: "👕 Одежда", image: "🧥" },
	{ id: 12, name: "Шапка зимняя", price: 950, categoryValue: 'clothing', category: "👕 Одежда", image: "🧢" },
	// Электроника
	{ id: 13, name: "Смартфон iPhone 15", price: 79990, categoryValue: 'electronics', category: "📱 Электроника", image: "📱" },
	{ id: 14, name: "Ноутбук MacBook Air", price: 119990, categoryValue: 'electronics', category: "📱 Электроника", image: "💻" },
	{ id: 15, name: "Наушники AirPods Pro", price: 24990, categoryValue: 'electronics', category: "📱 Электроника", image: "🎧" },
	{ id: 16, name: "Умные часы Apple Watch", price: 35990, categoryValue: 'electronics', category: "📱 Электроника", image: "⌚" },
	{ id: 17, name: "Планшет iPad Air", price: 69990, categoryValue: 'electronics', category: "📱 Электроника", image: "📱" },
	{ id: 18, name: "Колонка JBL Charge", price: 12990, categoryValue: 'electronics', category: "📱 Электроника", image: "🔊" }
]