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
      <div className='min-h-screen bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
          <div className='text-center'>
            <div className='bg-white rounded-2xl shadow-lg p-8 sm:p-12 lg:p-16 max-w-2xl mx-auto'>
              <div className='text-7xl sm:text-8xl lg:text-9xl mb-6'>🛒</div>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6'>
                Your Cart is Empty
              </h2>
              <p className='text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed'>
                Looks like you haven't added any items to your cart yet. 
                <br className='hidden sm:block' /> 
                Start shopping to fill up your cart with fresh groceries!
              </p>
              <Link 
                to="/shop" 
                className='inline-block bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 font-semibold text-lg hover:scale-105 shadow-lg'
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const deliveryCharge = totalAmount > 50 ? 0 : 5
  const handlingCharge = 2
  const finalTotal = totalAmount + deliveryCharge + handlingCharge

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        
        {/* Header Section */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4'>
          <div>
            <h1 className='text-2xl sm:text-3xl lg:text-3xl font-bold text-green-600 mb-2'>My Cart</h1>
            <p className='text-gray-600 text-base sm:text-lg'>
              {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <button
            onClick={handleClearCart}
            className='bg-red-50 cursor-pointer text-red-600 hover:bg-red-100 hover:text-red-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-red-200'
          >
            Clear All Items
          </button>
        </div>
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
          {/* Cart Items Section */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-2xl shadow-lg p-6 sm:p-8'>
              <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8'>
                Cart Items ({totalQuantity})
              </h2>
              
              <div className='space-y-4 sm:space-y-6'>
                {items.map((item) => (
                  <div key={item.id} className='bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow duration-300'>
                    {/* Mobile Layout */}
                    <div className='block lg:hidden'>
                      <div className='flex gap-4 mb-4'>
                        <div className='flex-shrink-0'>
                          <img 
                            src={item.image || 'https://via.placeholder.com/100x100'} 
                            alt={item.name} 
                            className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg' 
                          />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <h3 className='font-semibold text-gray-900 text-base sm:text-lg mb-1 truncate'>
                            {item.name}
                          </h3>
                          <p className='text-sm text-gray-500 mb-2'>{item.category}</p>
                          <p className='text-xl font-bold text-green-600'>${item.price}</p>
                        </div>
                        <div className='flex-shrink-0'>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className='bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors'
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                          <button 
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className='bg-green-600 text-white w-10 h-10 hover:bg-green-700 transition-colors flex items-center justify-center font-bold text-xl'
                          >
                            −
                          </button>
                          <span className='px-4 py-2 bg-white border-x border-gray-300 min-w-[60px] text-center font-medium'>
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className='bg-green-600 text-white w-10 h-10 hover:bg-green-700 transition-colors flex items-center justify-center font-bold text-xl'
                          >
                            +
                          </button>
                        </div>
                        <div className='text-right'>
                          <p className='text-sm text-gray-500'>Total</p>
                          <p className='text-lg font-bold text-gray-900'>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Desktop Layout */}
                    <div className='hidden lg:grid lg:grid-cols-12 gap-4 items-center'>
                      <div className='col-span-2 flex justify-center'>
                        <img 
                          src={item.image || 'https://via.placeholder.com/100x100'} 
                          alt={item.name} 
                          className='w-20 h-20 object-cover rounded-lg' 
                        />
                      </div>
                      <div className='col-span-4'>
                        <h3 className='font-semibold text-gray-900 text-base mb-1'>{item.name}</h3>
                        <p className='text-sm text-gray-500'>{item.category}</p>
                      </div>
                      <div className='col-span-2 text-center'>
                        <p className='text-lg font-bold text-green-600'>${item.price}</p>
                      </div>
                      <div className='col-span-3 flex justify-center'>
                        <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                          <button 
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                            className='bg-green-600 cursor-pointer text-white w-8 h-8 hover:bg-green-700 transition-colors flex items-center justify-center font-bold text-lg'
                          >
                            −
                          </button>
                          <span className='px-3 py-1 bg-white border-x border-gray-300 min-w-[40px] text-center font-medium text-sm'>
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                            className='bg-green-600 cursor-pointer text-white w-8 h-8 hover:bg-green-700 transition-colors flex items-center justify-center font-bold text-lg'
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className='col-span-1 flex justify-center'>
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className='bg-red-500 cursor-pointer text-white p-1.5 rounded-full hover:bg-red-600 transition-colors'
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:sticky lg:top-24'>
              <h2 className='text-xl sm:text-2xl font-bold text-green-600 mb-6 sm:mb-8'>Order Summary</h2>
              
              <div className='space-y-4 sm:space-y-6 mb-6 sm:mb-8'>
                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                  <p className='text-gray-600 text-base sm:text-lg'>Subtotal:</p>
                  <p className='font-semibold text-lg'>${totalAmount.toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                  <div>
                    <p className='text-gray-600 text-base sm:text-lg'>Delivery:</p>
                    {deliveryCharge === 0 && (
                      <p className='text-xs text-green-600'>Free on orders $50+</p>
                    )}
                  </div>
                  <p className={`font-semibold text-lg ${deliveryCharge === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    {deliveryCharge === 0 ? 'FREE' : `$${deliveryCharge.toFixed(2)}`}
                  </p>
                </div>
                <div className='flex justify-between items-center py-3 border-b border-gray-100'>
                  <p className='text-gray-600 text-base sm:text-lg'>Service Fee:</p>
                  <p className='font-semibold text-lg'>${handlingCharge.toFixed(2)}</p>
                </div>
                <div className='flex justify-between items-center py-4 border-t-2 border-green-200 bg-green-50 rounded-lg px-4 -mx-2'>
                  <p className='text-lg sm:text-xl font-bold text-gray-900'>Total:</p>
                  <p className='text-xl sm:text-2xl font-bold text-green-600'>${finalTotal.toFixed(2)}</p>
                </div>
              </div>

              {/* Cart Summary */}
              <div className='bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8'>
                <div className='grid grid-cols-2 gap-4 text-center'>
                  <div>
                    <p className='text-2xl sm:text-3xl font-bold text-green-600'>{totalQuantity}</p>
                    <p className='text-sm text-gray-600'>Items</p>
                  </div>
                  <div>
                    <p className='text-2xl sm:text-3xl font-bold text-green-600'>${finalTotal.toFixed(2)}</p>
                    <p className='text-sm text-gray-600'>Total</p>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={() => {
                  alert('Functionality not implemented yet!')
                }} 
                className='w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
              >
                Proceed to Checkout
              </button>
              
              {/* Security Info */}
              <div className='mt-4 sm:mt-6 text-center'>
                <p className='text-xs text-gray-500'>🔒 Secure checkout with SSL encryption</p>
              </div>
            </div>
          </div>
      </div>

        {/* Policies and Benefits Section */}
        <div className='mt-12 sm:mt-16'>
          <div className='grid md:grid-cols-2 gap-6 lg:gap-8 mb-8'>
            <div className='bg-white rounded-2xl shadow-lg p-6 sm:p-8'>
              <h3 className='text-xl sm:text-2xl font-bold text-green-600 mb-4 sm:mb-6'>Cancellation Policy</h3>
              <p className='text-gray-600 leading-relaxed text-base sm:text-lg'>
                Orders can be cancelled up to 1 hour after placement. Once packed for delivery, 
                cancellations are not possible. In case of delays, we'll provide updates and refunds when applicable.
              </p>
            </div>
            
            <div className='bg-white rounded-2xl shadow-lg p-6 sm:p-8'>
              <h3 className='text-xl sm:text-2xl font-bold text-green-600 mb-4 sm:mb-6'>Return Policy</h3>
              <p className='text-gray-600 leading-relaxed text-base sm:text-lg'>
                Fresh products can be returned within 24 hours if unsatisfactory. 
                Contact our support team immediately for quick assistance and full refunds.
              </p>
            </div>
          </div>
          
          {/* Benefits Banner */}
          <div className='bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 sm:p-8 text-white'>
            <h4 className='text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center'>Why Choose FreshMart?</h4>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6'>
              <div className='text-center'>
                <div className='bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3'>
                  <span className='text-2xl'>🚚</span>
                </div>
                <h5 className='font-semibold mb-2'>Free Delivery</h5>
                <p className='text-sm text-green-100'>On orders above $50</p>
              </div>
              <div className='text-center'>
                <div className='bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3'>
                  <span className='text-2xl'>🛡️</span>
                </div>
                <h5 className='font-semibold mb-2'>Quality Guarantee</h5>
                <p className='text-sm text-green-100'>Fresh products or money back</p>
              </div>
              <div className='text-center'>
                <div className='bg-white bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3'>
                  <span className='text-2xl'>📞</span>
                </div>
                <h5 className='font-semibold mb-2'>24/7 Support</h5>
                <p className='text-sm text-green-100'>Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart