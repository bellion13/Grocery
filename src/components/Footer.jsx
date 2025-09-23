import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='bg-gray-800 text-white p-4 mt-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col'>
                    <div className='grid grid-cols-4 gap-4 mb-4 text-left'>
                       
                    </div>
                    <p className='border-t border-gray-700 my-4 text-center'></p>
                    <p className='py-3 text-center'>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
