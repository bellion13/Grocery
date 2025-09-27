import React from 'react'
import FreshMart from '../assets/FreshMart.jpg'
import { Heart, Leaf, ShoppingBag, Truck } from 'lucide-react'
const About = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        
        {/* Hero Section */}
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-3xl sm:text-4xl lg:text-4xl font-bold mb-4 sm:mb-6 text-green-600 leading-tight'>
            About FreshMart
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            Your neighborhood grocery store committed to providing fresh, quality products since 2005.
          </p>
        </div>
        {/* Our Story Section */}
        <div className='bg-white rounded-2xl shadow-sm p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <div className='order-2 lg:order-1'>
              <h3 className='text-2xl sm:text-3xl  font-semibold mb-4 sm:mb-6 text-green-600'>
                Our Story
              </h3>
              <div className='text-gray-700 space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed'>
                <p>
                  FreshMart began with a simple idea: to create a grocery store that offers the freshest produce, 
                  highest quality meats, and finest selection of everyday essentials at fair prices.
                </p>
                <p>
                  Founded in 2005 by the Johnson family, our first store opened in Grocery City with just 15 employees. 
                  Today, we've grown to 25 locations across the state, but our commitment to quality and community remains unchanged.
                </p>
                <p>
                  We work directly with local farmers and producers to bring you the best products while supporting our local economy. 
                  Our team members are passionate about food and dedicated to providing exceptional customer service.
                </p>
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <div className='relative overflow-hidden rounded-xl shadow-lg'>
                <img 
                  src={FreshMart} 
                  alt="Our Story - FreshMart grocery store" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
        {/* Our Values Section */}
        <div className='text-center mb-12 sm:mb-16'>
          <h3 className='text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-green-600'>
            Our Values
          </h3>
          <p className='text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12'>
            These core values guide everything we do, from sourcing products to serving our community.
          </p>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            <div className='bg-white p-6 sm:p-8 rounded-xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow duration-300'>
              <div className='bg-green-100 p-4 rounded-full mb-4 text-green-600 flex justify-center items-center w-16 h-16 mx-auto'>
                <Leaf size={28} />
              </div>
              <h4 className='text-xl font-semibold mb-3 text-gray-900'>Freshness</h4>
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                We're committed to providing the freshest produce and products, sourced locally whenever possible.
              </p>
            </div>
            
            <div className='bg-white p-6 sm:p-8 rounded-xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow duration-300'>
              <div className='bg-green-100 p-4 rounded-full mb-4 text-green-600 flex justify-center items-center w-16 h-16 mx-auto'>
                <ShoppingBag size={28} />
              </div>
              <h4 className='text-xl font-semibold mb-3 text-gray-900'>Quality</h4>
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                We carefully select every product on our shelves to ensure the highest quality for our customers.
              </p>
            </div>
            
            <div className='bg-white p-6 sm:p-8 rounded-xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow duration-300'>
              <div className='bg-green-100 p-4 rounded-full mb-4 text-green-600 flex justify-center items-center w-16 h-16 mx-auto'>
                <Heart size={28} />
              </div>
              <h4 className='text-xl font-semibold mb-3 text-gray-900'>Community</h4>
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                We're proud to support local farmers, producers, and community initiatives in every neighborhood we serve.
              </p>
            </div>
            
            <div className='bg-white p-6 sm:p-8 rounded-xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow duration-300'>
              <div className='bg-green-100 p-4 rounded-full mb-4 text-green-600 flex justify-center items-center w-16 h-16 mx-auto'>
                <Truck size={28} />
              </div>
              <h4 className='text-xl font-semibold mb-3 text-gray-900'>Sustainability</h4>
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed'>
                We're committed to environmentally friendly practices and reducing our carbon footprint.
              </p>
            </div>
          </div>
        </div>
        {/* Call-to-Action Section */}
        <div className='bg-gradient-to-r from-green-500 to-green-500 rounded-2xl p-8 sm:p-12 text-center text-white'>
          <h3 className='text-2xl sm:text-3xl  font-semibold mb-4 sm:mb-6'>
            Join the FreshMart Family
          </h3>
          <p className='text-green-50 text-base md:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed'>
            We're always looking for passionate individuals to join our team. 
            Be part of something meaningful and help us serve our community better.
          </p>
          <button className='bg-white text-green-600 font-semibold py-4 px-8 sm:px-10 rounded-xl hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg'>
            View Career Opportunities
          </button>
        </div>
        
        {/* Additional Stats Section */}
        <div className='mt-12 sm:mt-16'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
            <div className='text-center'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2'>25</div>
              <div className='text-gray-600 text-sm sm:text-base'>Store Locations</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2'>500+</div>
              <div className='text-gray-600 text-sm sm:text-base'>Team Members</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2'>18</div>
              <div className='text-gray-600 text-sm sm:text-base'>Years of Service</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2'>50k+</div>
              <div className='text-gray-600 text-sm sm:text-base'>Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
