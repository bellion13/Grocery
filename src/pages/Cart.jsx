import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity, clearCart } from '../Redux-toolkit/CartSlice'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Cart = () => {

  const dispatch = useDispatch()
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart)
  
  const handleRemoveItem = (id) => {
    const item = items.find(item => item.id === id)
    dispatch(removeItem(id))
    toast.error(`${item.name} removed from cart!`, {
      position: "top-right",
      autoClose: 2000,
    })
  }
  
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      dispatch(removeItem(id))
    } else {
      dispatch(updateQuantity({ id, quantity }))
      toast.info('Quantity updated!', {
        position: "top-right",
        autoClose: 1500,
      })
    }
  }
  
  const handleClearCart = () => {
    dispatch(clearCart())
    toast.success('Cart cleared successfully!', {
        position: "top-right",
        autoClose: 2000,
      })
  }

  if (items.length === 0) {
    return (
      <div className='max-w-7xl mx-auto py-16 px-4'>
        <div className='text-center'>
          <div className='bg-gray-100 rounded-lg p-16'>
            <div className='text-6xl mb-4'>🛒</div>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Your Cart is Empty</h2>
            <p className='text-gray-600 mb-8'>Looks like you haven't added any items to your cart yet.</p>
            <Link 
              to="/shop" 
              className='bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium'
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const deliveryCharge = totalAmount > 50 ? 0 : 5
  const handlingCharge = 2
  const finalTotal = totalAmount + deliveryCharge + handlingCharge

  return (
    <div className='max-w-7xl mx-auto py-8 px-4'>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-3xl font-bold text-green-600'>My Cart</h2>
        <button
          onClick={handleClearCart}
          className='text-red-600 hover:text-red-800 font-medium transition-colors'
        >
          Clear All Items
        </button>
      </div>
      
      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Cart Items Section */}
        <div className='lg:col-span-2'>
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-semibold mb-6'>Cart Items ({totalQuantity})</h3>
            
            <div className='space-y-4'>
              {items.map((item) => (
                <div key={item.id} className='grid md:grid-cols-5 grid-cols-1 gap-4 items-center p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow'>
                  <div className='flex justify-center'>
                    <img 
                      src={item.image || 'https://via.placeholder.com/100x100'} 
                      alt={item.name} 
                      className='w-24 h-24 object-cover rounded-md' 
                    />
                  </div>
                  <div className='text-center md:text-left'>
                    <p className='font-semibold text-gray-800'>{item.name}</p>
                    <p className='text-sm text-gray-500'>{item.category}</p>
                  </div>
                  <div className='text-center'>
                    <p className='text-lg font-bold text-green-600'>${item.price}</p>
                  </div>
                  <div className='flex justify-center'>
                    <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className='bg-green-600 text-white px-3 py-2 hover:bg-green-700 transition-colors cursor-pointer'
                      >
                        -
                      </button>
                      <span className='px-4 py-2 bg-gray-50 border-x border-gray-300 min-w-[50px] text-center'>
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className='bg-green-600 text-white px-3 py-2 hover:bg-green-700 transition-colors cursor-pointer'
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='flex justify-center'>
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
                      className='bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors cursor-pointer'
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className='lg:col-span-1'>
          <div className='bg-white rounded-lg shadow-md p-6 sticky top-24'>
            <h2 className='text-2xl font-bold text-green-600 mb-6'>Bill Details</h2>
            
            <div className='space-y-4 mb-6'>
              <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                <p className='text-gray-600'>Item Total:</p>
                <p className='font-semibold'>${totalAmount}</p>
              </div>
              <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                <p className='text-gray-600'>Delivery Charge:</p>
                <p className={`font-semibold ${deliveryCharge === 0 ? 'text-green-600' : ''}`}>
                  {deliveryCharge === 0 ? 'FREE' : `$${deliveryCharge}`}
                </p>
              </div>
              <div className='flex justify-between items-center py-2 border-b border-gray-100'>
                <p className='text-gray-600'>Handling Charge:</p>
                <p className='font-semibold'>${handlingCharge}</p>
              </div>
              <div className='flex justify-between items-center py-3 border-t-2 border-green-200'>
                <p className='text-lg font-bold text-gray-800'>Total Amount:</p>
                <p className='text-xl font-bold text-green-600'>${finalTotal}</p>
              </div>
            </div>

            {/* Cart Summary */}
            <div className='bg-gray-50 rounded-lg p-4 mb-6'>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-gray-600'>Total Items:</p>
                <p className='font-semibold'>{totalQuantity}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-gray-600'>Total Price:</p>
                <p className='font-bold text-green-600'>${finalTotal.toFixed(2)}</p>
              </div>
            </div>

            {/* Checkout Button */}
            <button onClick={() => {
              alert('Functionality not implemented yet!')
            }} className='cursor-pointer w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Cancellation Policy Section */}
      <div className='mt-12 bg-white rounded-lg shadow-md p-6'>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-2xl font-bold text-green-600 mb-4'>Cancellation Policy</h3>
            <p className='text-gray-600 leading-relaxed'>
              Orders cannot be cancelled once packed for delivery. In case of unexpected delays, 
              a refund will be provided, if applicable.
            </p>
          </div>
          
          <div>
            <h3 className='text-2xl font-bold text-green-600 mb-4'>Return Policy</h3>
            <p className='text-gray-600 leading-relaxed'>
              Fresh products can be returned within 24 hours of delivery if found unsatisfactory. 
              Please contact our customer service for assistance.
            </p>
          </div>
        </div>
        
        {/* Additional Benefits */}
        <div className='mt-8 pt-6 border-t border-gray-200'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
            <div className='flex items-center justify-center space-x-2'>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
              <span className='text-sm text-gray-600'>Free Delivery Above $50</span>
            </div>
            <div className='flex items-center justify-center space-x-2'>
              <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
              <span className='text-sm text-gray-600'>24/7 Customer Support</span>
            </div>
            <div className='flex items-center justify-center space-x-2'>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <span className='text-sm text-gray-600'>Fresh Quality Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart