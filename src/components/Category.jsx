import React from 'react'
import fruits from '../assets/fruits.png'
import vegetables from '../assets/vegetabels.png'
import dairy from '../assets/dairy.png'
import bakery from '../assets/bakery.png'
import meat from '../assets/meat.png'
import beverages from '../assets/beverages.png'

import { useNavigate } from 'react-router-dom'
const Category = () => {
    const navigate = useNavigate()
    const categories = [
        {
            id: 1,
            name: 'Fruits',
            image: fruits
        },
        {
            id: 2,
            name: 'Vegetables',
            image: vegetables
        },
        {
            id: 3,
            name: 'Dairy',
            image: dairy
        },
        {
            id: 4,
            name: 'Bakery',
            image: bakery
        },
        {
            id: 5,
            name: 'Meat',
            image: meat
        },
        {
            id: 6,
            name: 'Beverages',
            image: beverages
        },
    ]

  return (
    <div className='max-w-7xl mx-auto'>
      <h2 className='text-3xl font-bold text-center py-8'>Shop by Category</h2>
      <div className='grid md:grid-cols-6 grid-cols-1 gap-6 px-4 md:px-0 pb-8'>
        {categories.map(category => (
          <div key={category.id} onClick={() => navigate(`/shop`)} className='overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300'>
            <img src={category.image} alt={category.name} className='w-full h-48 object-cover bg-green-100 border border-green-300 rounded-lg'/>
            <div className='p-4'>
              <h3 className=' text-base font-semibold text-center '>{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
