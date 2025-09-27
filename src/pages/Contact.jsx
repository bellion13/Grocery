import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-green-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
          {/* Contact Form */}
          <div className='order-2 lg:order-1'>
            <div className='bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10'>
              <div className='mb-6 sm:mb-8'>
                <h2 className='text-2xl sm:text-3xl font-bold text-green-600 mb-2'>Send us a Message</h2>
                <p className='text-gray-600 text-base sm:text-lg'>Fill out the form below and we'll get back to you soon!</p>
              </div>
              
              <form className='space-y-6'>
                <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>First Name</label>
                    <input 
                      className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300' 
                      type="text" 
                      placeholder='John' 
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2'>Last Name</label>
                    <input 
                      className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300' 
                      type="text" 
                      placeholder='Doe' 
                    />
                  </div>
                </div>
                
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                  <input 
                    className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300' 
                    type="email" 
                    placeholder='john.doe@example.com' 
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Phone Number</label>
                  <input 
                    className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300' 
                    type="tel" 
                    placeholder='(123) 456-7890' 
                  />
                </div>
                
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Subject</label>
                  <select className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300'>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>
                
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>Message</label>
                  <textarea 
                    className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none' 
                    rows="5"
                    placeholder='Tell us how we can help you...'
                  ></textarea>
                </div>
                
                <button 
                  className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl' 
                  type='submit'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className='order-1 lg:order-2'>
            <div className='bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 mb-8'>
              <h2 className='text-2xl sm:text-3xl font-bold text-green-600 mb-6 sm:mb-8'>Contact Information</h2>
              
              <div className='space-y-6 sm:space-y-8'>
                <div className='flex items-start gap-4'>
                  <div className='bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0'>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>Phone</h3>
                    <p className='text-gray-600 mb-1 text-base sm:text-lg'>(123) 456-7890</p>
                    <p className='text-gray-500 text-sm'>Available Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-4'>
                  <div className='bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0'>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>Email</h3>
                    <p className='text-gray-600 mb-1 text-base sm:text-lg'>info@freshmart.com</p>
                    <p className='text-gray-500 text-sm'>We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-4'>
                  <div className='bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0'>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>Address</h3>
                    <p className='text-gray-600 text-base sm:text-lg'>123 Freshmart Street</p>
                    <p className='text-gray-600 text-base sm:text-lg'>Fresh City, FC 12345</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-4'>
                  <div className='bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0'>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>Store Hours</h3>
                    <div className='text-gray-600 text-base sm:text-lg space-y-1'>
                      <p>Monday - Friday: 8am - 9pm</p>
                      <p>Saturday: 8am - 8pm</p>
                      <p>Sunday: 9am - 7pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Contact Cards */}
            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='bg-green-600 text-white p-6 rounded-xl text-center hover:bg-green-700 transition-colors duration-300 cursor-pointer'>
                <Phone className='mx-auto mb-3' size={32} />
                <h4 className='font-semibold mb-1'>Call Us</h4>
                <p className='text-sm text-green-100'>Immediate assistance</p>
              </div>
              <div className='bg-blue-600 text-white p-6 rounded-xl text-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer'>
                <Mail className='mx-auto mb-3' size={32} />
                <h4 className='font-semibold mb-1'>Email Us</h4>
                <p className='text-sm text-blue-100'>24hr response time</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className='mt-16 sm:mt-20'>
          <div className='text-center mb-8 sm:mb-12'>
            <h3 className='text-2xl sm:text-3xl font-bold text-green-600 mb-4'>Frequently Asked Questions</h3>
            <p className='text-gray-600 text-base sm:text-lg'>Quick answers to common questions</p>
          </div>
          
          <div className='grid md:grid-cols-2 gap-6 lg:gap-8'>
            <div className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500'>
              <h4 className='font-semibold text-lg mb-2 text-gray-900'>What are your delivery hours?</h4>
              <p className='text-gray-600'>We deliver Monday through Sunday, 9am to 8pm. Same-day delivery is available for orders placed before 2pm.</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500'>
              <h4 className='font-semibold text-lg mb-2 text-gray-900'>Do you offer organic products?</h4>
              <p className='text-gray-600'>Yes! We have a wide selection of certified organic fruits, vegetables, dairy products, and pantry items.</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500'>
              <h4 className='font-semibold text-lg mb-2 text-gray-900'>What's your return policy?</h4>
              <p className='text-gray-600'>We guarantee freshness! If you're not satisfied with any product, bring it back within 7 days for a full refund.</p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500'>
              <h4 className='font-semibold text-lg mb-2 text-gray-900'>Do you have a loyalty program?</h4>
              <p className='text-gray-600'>Yes! Join our FreshRewards program to earn points on every purchase and get exclusive discounts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
