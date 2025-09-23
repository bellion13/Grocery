import React from 'react'

import { products } from '../Utils/Data'
import ProductsCard from './ProductsCard'
const Products = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold py-6'>Featured Products</h2>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-6 px-4 md:p-4 pb-8'>
                {
                    products.slice(0, 5).map((product) => {
                        return <ProductsCard key={product.id} product={product} />
                    })
                }
            </div>
            <div className='text-center py-6 mb-6'>
                <button className='cursor-pointer border border-green-600 hover:bg-green-700 hover:text-white font-medium py-3 px-4 rounded-3xl transition-colors duration-200'>
                    View All Products
                </button>
            </div>
        </div>
    )
}

export default Products