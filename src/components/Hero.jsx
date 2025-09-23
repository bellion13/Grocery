import React from 'react'
import { useNavigate } from 'react-router-dom'
import ImgHero from '../assets/Hero1.png'
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[85vh]  bg-green-600'>
            <div className='max-w-7xl mx-auto flex justify-between items-center h-full px-5 md:px-0'>
                {/* content hero */}
                <div className='flex-1'>
                    <h1 className='text-5xl font-bold text-white'> Fresh <span className='text-orange-300'>Groceries</span> Delivered to Your Door</h1>
                    <p className='text-lg text-white mt-4'>Shop from our wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!</p>
                    <div className='mt-8 gap-4 flex'>
                        <button onClick={()=> navigate('/shop')} className='bg-white text-green-600 px-6 py-2 rounded-full mr-4 cursor-pointer hover:opacity-90'>Shop Now</button>
                        <button onClick={()=> navigate('/about')} className='bg-green-800 border-2 border-white text-white px-6 py-2 rounded-full cursor-pointer hover:bg-green-600'>Learn More</button>
                    </div>
                </div>
                {/* image hero */}
                <div className='flex-1'>
                    <img src={ImgHero} alt="Hero" className='ml-6 p-4 bg-white/20 rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default Hero
