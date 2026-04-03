import { useEffect, useState } from 'react'
import './App.css'
import { Basket } from './components/Basket'
import { CategoryFilter } from './components/CategoryFilter'
import { ProductsList } from './components/ProductsList'
import { SortBar } from './components/SortBar'


function App() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const saved = localStorage.getItem('selectedCategory')
    return saved !== null ? saved : 'all'
  })

  const [currentSort, setCurrentSort] = useState(() => {
    const saved = localStorage.getItem('currentSort')
    return saved !== null ? saved : 'name-asc'
  })

  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory)
  }, [selectedCategory])

  useEffect(() => {
    localStorage.setItem('currentSort', currentSort)
  }, [currentSort])

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
          <CategoryFilter
            onCategoryChange={setSelectedCategory}
          />
        </aside>
        <main className='products-content'>
          <SortBar
            onSortChange={setCurrentSort}
            currentSort={currentSort} />
          <ProductsList
            selectedCategory={selectedCategory}
            currentSort={currentSort} />
        </main>
      </div>
      {/* CardSidebar */}
    </div>
  )
}

export default App
