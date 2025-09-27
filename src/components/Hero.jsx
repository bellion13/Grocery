import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImgHero from '../assets/Hero1.png'
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='min-h-[85vh] bg-green-600'>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center min-h-[85vh] px-4 sm:px-6 lg:px-8 py-8 lg:py-0 gap-8 lg:gap-0'>
                {/* content hero */}
                <div className='flex-1 text-center lg:text-left order-2 lg:order-1'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'> Fresh <span className='text-orange-300'>Groceries</span> Delivered to Your Door</h1>
                    <p className='text-base sm:text-lg lg:text-xl text-white mt-4 max-w-lg mx-auto lg:mx-0'>Shop from our wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!</p>
                    <div className='mt-8 gap-4 flex flex-col sm:flex-row justify-center lg:justify-start'>
                        <button onClick={()=> navigate('/shop')} className='bg-white text-green-600 px-6 py-3 rounded-full cursor-pointer hover:opacity-90 transition-opacity font-medium'>Shop Now</button>
                        <button onClick={()=> navigate('/about')} className='bg-green-800 border-2 border-white text-white px-6 py-3 rounded-full cursor-pointer hover:bg-green-600 transition-colors font-medium'>Learn More</button>
                    </div>
                </div>
                {/* image hero */}
                <div className='flex-1 flex justify-center lg:justify-end order-1 lg:order-2 w-full'>
                    <div className='relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl'>
                        <img src={ImgHero} alt="Hero" className='w-full h-auto object-contain p-4 bg-white/20 rounded-lg lg:ml-6' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
