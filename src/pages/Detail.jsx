import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, updateQuantity } from '../Redux-toolkit/CartSlice'
import { products } from '../Utils/Data'
import { toast } from 'react-toastify'
import ProductsCard from '../components/ProductsCard'


const Detail = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)

    const [quantity, setQuantity] = useState(1)

    // Find product by ID
    const product = products.find(p => p.id === parseInt(id))

    // Check if product is in cart
    const cartItem = cartItems.find(item => item.id === product?.id)

    // Get similar products (same category, excluding current product)
    const similarProducts = products.filter(p =>
        p.category === product?.category && p.id !== product?.id
    ).slice(0, 4)

    // Handle quantity changes
    const handleQuantityChange = (type) => {
        if (type === 'increase') {
            setQuantity(prev => prev + 1)
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    // Handle add to cart
    const handleAddToCart = () => {
        if (cartItem) {
            // If item exists, update quantity
            dispatch(updateQuantity({
                id: product.id,
                quantity: cartItem.quantity + quantity
            }))
            toast.success(`Updated ${product.name} quantity in cart!`)
        } else {
            // If item doesn't exist, add with selected quantity
            const productWithQuantity = { ...product, quantity }
            dispatch(addItem(productWithQuantity))
            toast.success(`${product.name} added to cart!`)
        }
        setQuantity(1) // Reset quantity after adding
    }

    // Loading state
    if (!product) {
        return (
            <div className='max-w-7xl mx-auto py-16 px-4'>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-4'>Product Not Found</h2>
                    <p className='text-gray-600 mb-8'>The product you're looking for doesn't exist.</p>
                    <Link
                        to="/shop"
                        className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors'
                    >
                        Back to Shop
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='max-w-7xl mx-auto py-8 px-4'>
            {/* Breadcrumb */}
            <div className='mb-6'>
                <nav className='text-sm text-gray-600'>
                    <Link to="/" className='hover:text-green-600'>Home</Link>
                    <span className='mx-2'>/</span>
                    <Link to="/shop" className='hover:text-green-600'>Shop</Link>
                    <span className='mx-2'>/</span>
                    <span className='text-gray-800'>{product.name}</span>
                </nav>
            </div>

            {/* Product Details */}
            <div className='grid md:grid-cols-2 gap-8 mb-12'>
                {/* Product Image */}
                <div className='bg-white border border-gray-200 rounded-lg p-6 flex justify-center items-center'>
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-full h-96 object-cover rounded-md'
                    />
                </div>

                {/* Product Info */}
                <div className='space-y-6'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>{product.name}</h1>
                        <p className='text-sm text-gray-500 uppercase tracking-wide'>{product.category}</p>
                        <p className='text-sm text-gray-600 mt-1'>{product.quantity}</p>
                    </div>

                    <div className='border-t border-b border-gray-200 py-4'>
                        <p className='text-3xl font-bold text-green-600'>
                            ${product.price}
                        </p>

                    </div>

                    {/* Quantity Selector */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>Quantity</h3>
                        <div className='flex items-center space-x-4'>
                            <div className='flex items-center flex-col gap-4'>
                                <div className='flex border border-gray-300 rounded-lg overflow-hidden'>
                                    <button
                                        onClick={() => handleQuantityChange('decrease')}
                                        className='cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors'
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className='px-6 py-2 border-x border-gray-300 min-w-[60px] text-center'>
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => handleQuantityChange('increase')}
                                        className='cursor-pointer px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors'
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className=' cursor-pointer flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium'
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className='bg-gray-50 rounded-lg p-2 space-y-2'>
                        <div className='flex items-center space-x-2'>
                            <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                            <span className='text-sm text-gray-600'>Fresh Quality Guaranteed</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                            <span className='text-sm text-gray-600'>Free Delivery Above $50</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                            <span className='text-sm text-gray-600'>24/7 Customer Support</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className='mb-12'>
                <h2 className='text-2xl font-bold mb-4'>Product Description</h2>
                <div className='bg-white border border-gray-200 rounded-lg p-6'>
                    <p className='text-gray-700 leading-relaxed'>
                        {product.desc || `Fresh ${product.name} from ${product.category} category. High quality product sourced from local farmers. Perfect for your daily nutrition needs. Rich in vitamins and minerals, this product will add great value to your healthy lifestyle.`}
                    </p>
                </div>
            </div>

            {/* Similar Products */}
            {similarProducts.length > 0 && (
                <div className='mb-12'>
                    <div className='flex items-center justify-between mb-6'>
                        <h2 className='text-2xl font-bold'>Similar Products</h2>
                        <Link
                            to="/shop"
                            className='text-green-600 hover:text-green-700 font-medium'
                        >
                            View All →
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {similarProducts.map((similarProduct) => (
                            <Link key={similarProduct.id} to={`/detail/${similarProduct.id}`}>
                                <ProductsCard product={similarProduct} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail