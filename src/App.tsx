import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Basket } from './components/Basket';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductsList } from './components/ProductsList';
import { SortBar } from './components/SortBar';
import { useUrlFilters } from './hooks/useUrlFilters';

import type { SortType } from './types/sort.types';
import { fetchProducts } from './store/product/product.slice';
import type { TAppDispatch } from './store/store';

function App() {
  const dispatch = useDispatch<TAppDispatch>();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentSort, setCurrentSort] = useState<SortType>('name-asc');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // хук для url
  const { updateCategoryParam, updateSortParam } = useUrlFilters(
    setSelectedCategory,
    setCurrentSort
  );

  return (
    <div className='app'>
      <header className='header'>
        <div className='logo'>
          <span className='logo-icon'>🛍️ </span>
          <span className='logo-text'>ShopMaster</span>
        </div>
        <Basket />
      </header>

      <div className='main-container'>
        <aside className='sidebar'>
          <CategoryFilter onCategoryChange={updateCategoryParam} />
        </aside>
        <main className='products-content'>
          <SortBar
            onSortChange={updateSortParam}
            currentSort={currentSort}
          />
          <ProductsList
            selectedCategory={selectedCategory}
            currentSort={currentSort}
          />
        </main>
      </div>
    </div>
  );
}

export default App;