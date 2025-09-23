import React from 'react'

const ProductsCard = ({ product }) => {
    return (
        <div className='text-sm border border-green-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col h-full'>
            <div className='flex-1'>
                <img src={product.image} alt={product.name} className='w-full h-48 object-cover border-b border-green-300' />
                <div className='p-4 flex-1'>
                    <p className='text-gray-600 text-xs'>{product.category}</p>
                    <p className='font-semibold mt-1 text-sm line-clamp-2'>{product.name}</p>
                    <p className='text-gray-600 mt-1 text-xs'>{product.quantity}</p>
                    <p className='font-bold text-green-600 text-lg mt-2'>${product.price}</p>
                </div>
            </div>
            <div className='p-4 pt-0 '>
                <button className='cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 '>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductsCard
