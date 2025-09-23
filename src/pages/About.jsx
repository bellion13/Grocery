import React from 'react'
import FreshMart from '../assets/FreshMart.jpg'
import { Heart, Leaf, ShoppingBag, Truck } from 'lucide-react'
const About = () => {
  return (
    <div className='max-w-7xl mx-auto pt-12'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold mb-4 text-green-600'>About FreshMart</h1>
        <p className='text-xl text-gray-600'>Your neighborhood grocery store committed to providing fresh, quality products since 2005.</p>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-8 my-12 '>
        <div>
          <h3 className='text-3xl font-semibold mb-4 text-green-600'>
            Our Story
          </h3>
          <div className='text-gray-700 space-y-4 mb-6 text-base'>
            <p>FreshMart began with a simple idea: to create a grocery store that offers the freshest produce, highest quality meats, and finest selection of everyday essentials at fair prices.</p>
            <p>Founded in 2005 by the Johnson family, our first store opened in Grocery City with just 15 employees. Today, we've grown to 25 locations across the state, but our commitment to quality and community remains unchanged.</p>
            <p>We work directly with local farmers and producers to bring you the best products while supporting our local economy. Our team members are passionate about food and dedicated to providing exceptional customer service.</p>
          </div>
        </div>
        <div className='flex items-center overflow-hidden rounded-lg shadow-lg'>
          <img src={FreshMart} alt="Our Story" className="w-full h-auto" />
        </div>
      </div>
      <div className='mt-14 text-center'>
        <h3 className='text-3xl font-semibold mb-4 text-green-600' >Our Values</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-6 my-10'>
          <div className='flex flex-col items-center py-6 border-t-4 border-1 rounded-xl border-green-500 '>
            <div className=' bg-green-100 p-4 rounded-full mb-2 text-green-600 flex justify-center items-center'>
              <Leaf />
            </div>
            <div className='text-xl font-semibold py-3'>Freshness</div>
            <div className='px-6 text-gray-600 text-base'>
              We're committed to providing the freshest produce and products, sourced locally whenever possible.
            </div>
          </div>
          <div className='flex flex-col items-center py-6 border-t-4 border-1 rounded-xl border-green-500 '>
            <div className=' bg-green-100 p-4 rounded-full mb-2 text-green-600 flex justify-center items-center'>
               <ShoppingBag />
            </div>
            <div className='text-xl font-semibold py-3'>Quality</div>
            <div className='px-6 text-gray-600 text-base'>
              We carefully select every product on our shelves to ensure the highest quality for our customers.
            </div>
          </div>
          <div className='flex flex-col items-center py-6 border-t-4 border-1 rounded-xl border-green-500 '>
            <div className=' bg-green-100 p-4 rounded-full mb-2 text-green-600 flex justify-center items-center'>
             
              <Heart />
            </div>
            <div className='text-xl font-semibold py-3'>Community</div>
            <div className='px-6 text-gray-600 text-base'>
             We're proud to support local farmers, producers, and community initiatives in every neighborhood we serve.
            </div>
          </div>
          <div className='flex flex-col items-center py-6 border-t-4 border-1 rounded-xl border-green-500 '>
            <div className=' bg-green-100 p-4 rounded-full mb-2 text-green-600 flex justify-center items-center'>
              <Truck />
            </div>
            <div className='text-xl font-semibold py-3'>Sustainability</div>
            <div className='px-6 text-gray-600 text-base'>
              We're committed to environmentally friendly practices and reducing our carbon footprint.
            </div>
          </div>

        </div>
      </div>
      <div className='my-20 text-center bg-green-50 rounded-2xl py-10'>
        <h3 className='text-2xl font-semibold text-green-600'>Join the FreshMart Family</h3>
        <p className='text-gray-600 text-base my-4'>We're always looking for passionate individuals to join our team. Check out our current openings!</p>
        <button className='mt-4 cursor-pointer border border-green-600 bg-green-600 text-white font-medium py-3 px-5 rounded-2xl transition-colors duration-200 hover:bg-green-700'>
          View Career Opportunities
        </button>
      </div>
    </div>
  )
}

export default About
