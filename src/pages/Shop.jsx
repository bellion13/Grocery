import React from 'react'
import { useState, useMemo } from 'react'
import ProductsCard from '../components/ProductsCard'
import { products } from '../Utils/Data'

const Shop = () => {

  const [range, setRange] = useState([0, 500])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const uniqueCategories = [...new Set(products.map(product => product.category))];


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
    <>
      <div className='max-w-7xl mx-auto flex flex-col my-16 '>
        <div className='col-span-1 p-4 bg-gray-100 rounded-lg fixed w-[280px] mb-10 hidden md:block'>
          <div >
            <h2 className='text-lg font-bold text-green-600 mb-4'>Filters</h2>

            {/* Search Input */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='p-2 mb-2 w-full border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
              type="text"
              placeholder='Search products...'
            />

            {/* Category Select */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='cursor-pointer p-2 my-2 w-full border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              <option value="">All Categories</option>
              {uniqueCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div className='my-4'>
              <p className='text-base font-medium mb-2'>Price Range: ${range[0]} - ${range[1]}</p>
              {/* Range Slider */}
              <div className='mb-2'>
                <input
                  type="range"
                  min="0"
                  max="500"
                  className='w-full h-2 bg-green-400 rounded-lg appearance-none cursor-pointer'
                  value={range[1]}
                  onChange={(e) => {
                    const value = Number(e.target.value)
                    if (value >= range[0]) {
                      setRange([range[0], value])
                    }
                  }}
                />
              </div>
            </div>

            <button
              onClick={resetFilters}
              className='cursor-pointer w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors'
            >
              Reset Filters
            </button>

            {/* Results Counter */}
            <div className='mt-3 text-sm text-gray-600'>
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
        </div>

        <div className='col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[300px] px-4 md:px-0 mt-6 md:mt-0'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))
          ) : (
            <div className='col-span-full text-center py-12'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <h3 className='text-xl font-semibold text-gray-600 mb-2'>No products found</h3>
                <p className='text-gray-500 mb-4'>Try adjusting your filters or search terms.</p>
                <button
                  onClick={resetFilters}
                  className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors'
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Shop