import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
const Contact = () => {
  return (
    <div className='bg-green-50 '>
      <div className='max-w-7xl mx-auto '>
      <div className='min-h-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-4 mt-16 md:mt-0' >
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6'>
          <h2 className='text-2xl font-bold text-center text-green-600'>Contact Freshmart</h2>
          <p className='text-gray-600 text-center mt-2'>We would love to hear from you!</p>
          <form className='mt-4 flex flex-col gap-2'>
            <label className='font-base font-bold'>Name:</label>
            <input className='p-2 mb-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500' type="text" placeholder='Name' />
            <label className='font-base font-bold'>Email:</label>
            <input className='p-2 mb-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500' type="email" placeholder='Email' />
            <label className='font-base font-bold'>Message:</label>
            <textarea className='p-2 mb-2 border border-green-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Your message'></textarea>
            <button className='bg-green-600 text-white p-2 rounded cursor-pointer hover:bg-green-700' type='submit'>Send Message</button>
          </form>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6'>
          <h2 className='text-2xl font-bold text-center text-green-600 '>Contact Information</h2>
          <div className='mt-6 flex flex-col gap-6'>
            <div className='flex gap-4 '>
              <div className='mt-1.5'>
                <Phone className='text-green-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold '>Phone</h3>
                <p className='text-gray-600'>(123) 456-7890</p>
                <p className='text-gray-600'>Mon-Fri: 9am - 5pm</p>
              </div>
            </div>
            <div className='flex gap-4 '>
              <div className='mt-1.5'>
                <Mail className='text-green-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold '>Email</h3>
                <p className='text-gray-600'>info@freshmart.com</p>
                <p className='text-gray-600'>Mon-Fri: 9am - 5pm</p>
              </div>
            </div>
            <div className='flex gap-4 '>
              <div className='mt-1.5'>
                <MapPin className='text-green-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold '>Address</h3>
                <p className='text-gray-600'>123 Freshmart St.</p>
                <p className='text-gray-600'>Fresh City, FC 12345</p>
              </div>
            </div>
            <div className='flex gap-4 '>
              <div className='mt-1.5'>
                <Clock className='text-green-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Hours of Operation</h3>
                <p className='text-gray-600'>Mon-Fri: 9am - 5pm</p>
                <p className='text-gray-600'>Sat: 10am - 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
