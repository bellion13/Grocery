import React from 'react'
import { useState, useMemo } from 'react'
import ProductsCard from '../components/ProductsCard'
import { products } from '../Utils/Data'
import { ArrowDown, ArrowUp } from 'lucide-react'
const Shop = () => {
  const [range, setRange] = useState([0, 500])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const uniqueCategories = [...new Set(products.map(product => product.category))];
  const [openFilters, setOpenFilters] = useState(false);

  const toggleFilters = () => {
    setOpenFilters(!openFilters);
  }
  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesPrice = product.price >= range[0] && product.price <= range[1]
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === '' || product.category === category
      return matchesPrice && matchesSearch && matchesCategory
    })
  }, [range, search, category])
  const resetFilters = () => {
    setRange([0, 500])
    setSearch('')
    setCategory('')
  }
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Page Header */}
        <div className='mb-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-green-600 mb-2'>Shop All Products</h1>

        </div>

        {/* Mobile Filter Toggle */}
        <div className='lg:hidden mb-6'>
          <button
            onClick={toggleFilters}
            className='w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors'
          >
            {openFilters ? <div className='flex items-center justify-between w-full'>
              Filters <ArrowUp />
            </div> : <div className='flex items-center justify-between w-full'>
              Filters <ArrowDown />
            </div>}
          </button>
        </div>

        {/* Mobile Filters */}
        {openFilters && (
          <div className='lg:hidden mb-6'>
            <div className='bg-white p-4 rounded-lg shadow-sm border border-green-600'>
              <h2 className='text-lg font-bold text-green-600 mb-4'>Filters</h2>

              {/* Mobile Search */}
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                type="text"
                placeholder='Search products...'
              />

              {/* Mobile Category & Reset */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4'>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
                >
                  <option value="">All Categories</option>
                  {uniqueCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>

                <button
                  onClick={resetFilters}
                  className='cursor-pointer w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-gray-300 hover:text-black transition-colors'
                >
                  Reset Filters
                </button>
              </div>

              {/* Mobile Price Range */}
              <div className='mb-4'>
                <p className='text-sm font-medium text-gray-700 mb-2'>
                  Price Range: ${range[0]} - ${range[1]}
                </p>
                <input
                  type="range"
                  min="0"
                  max="500"
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                  value={range[1]}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (value >= range[0]) {
                      setRange([range[0], value])
                    }
                  }}
                />
              </div>

              <div className='text-sm text-gray-600 text-center bg-green-50 p-3 rounded-lg'>
                Showing {filteredProducts.length} of {products.length} products
              </div>
            </div>
          </div>
        )}

        <div className='flex flex-col lg:flex-row gap-8'>

          {/* Desktop Sidebar Filters */}
          <div className='hidden lg:block lg:w-72 flex-shrink-0'>
            <div className='sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-green-600'>

              <h2 className='text-lg font-bold text-green-600 mb-6'>Filters</h2>

              {/* Desktop Search Input */}
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Search Products</label>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  type="text"
                  placeholder='Search products...'
                />
              </div>

              {/* Desktop Category Select */}
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer'
                >
                  <option value="">All Categories</option>
                  {uniqueCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop Price Range */}
              <div className='mb-6'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Price Range: ${range[0]} - ${range[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
                  value={range[1]}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (value >= range[0]) {
                      setRange([range[0], value])
                    }
                  }}
                />
                <div className='flex justify-between text-xs text-gray-500 mt-1'>
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>

              <button
                onClick={resetFilters}
                className='w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors mb-4'
              >
                Reset Filters
              </button>

              {/* Desktop Results Counter */}
              <div className='text-sm text-gray-600 bg-green-50 p-3 rounded-lg text-center'>
                Showing <span className='font-medium'>{filteredProducts.length}</span> of{' '}
                <span className='font-medium'>{products.length}</span> products
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className='flex-1'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductsCard key={product.id} product={product} />
                ))
              ) : (
                <div className='col-span-full'>
                  <div className='text-center py-16'>
                    <div className='bg-white rounded-lg p-8 max-w-md mx-auto shadow-sm border'>
                      <div className='text-6xl mb-4'>🔍</div>
                      <h3 className='text-xl font-semibold text-gray-600 mb-2'>No products found</h3>
                      <p className='text-gray-500 mb-6'>
                        Try adjusting your filters or search terms to find what you're looking for.
                      </p>
                      <button
                        onClick={resetFilters}
                        className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium'
                      >
                        Reset All Filters
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop