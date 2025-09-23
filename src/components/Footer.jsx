import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
    return (
        <div className='bg-gray-800 text-white p-4 mt-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col mt-6'>
                    <div className='grid grid-cols-4 gap-4 mb-4 text-left'>
                        <div>
                            <h3 className='text-xl font-semibold mb-4'>FreshMart</h3>
                            <p className='text-base mb-4'>Your one-stop shop for fresh groceries delivered to your doorstep.</p>
                            <div className='text-base'>
                                <h3 className='font-semibold mb-4'>
                                    Follow Us
                                </h3>
                                <div className='flex gap-4 mt-2'>
                                    <Facebook />
                                    <Instagram />
                                    <Twitter />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                            <div className='flex flex-col'>
                                <Link className='mb-2 hover:text-green-600' to="/about">About Us</Link>
                                <Link className='mb-2 hover:text-green-600' to="/contact">Contact</Link>
                                <Link className='mb-2 hover:text-green-600' to="/">FAQ</Link>
                                <Link className='mb-2 hover:text-green-600' to="/">Privacy Policy</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
                            <div className='flex flex-col'>
                                <Link className='mb-2 hover:text-green-600' to="/about">About Us</Link>
                                <Link className='mb-2 hover:text-green-600' to="/contact">Contact</Link>
                                <Link className='mb-2 hover:text-green-600' to="/">FAQ</Link>
                                <Link className='mb-2 hover:text-green-600' to="/">Privacy Policy</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-4'>
                                Contact
                            </h3>
                            <div>
                                <div className='mb-2'>
                                    123 Grocery St, Food City
                                </div>
                                <div className='mb-2'>
                                    Phone: (123) 456-7890
                                </div>
                                <div className='mb-2'>
                                    Email: support@freshmart.com
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='border-t border-gray-700 my-4 text-center'></p>
                    <p className='py-3 text-center'>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
