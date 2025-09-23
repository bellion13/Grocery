import React from 'react'
import { useNavigate } from 'react-router-dom'
const FreeOrder = () => {   
    const navigate = useNavigate();

    return (
        <div className='bg-green-100'>
            <div className='max-w-7xl mx-auto text-center py-10'>
                <div className='text-3xl font-bold my-3'>Free Delivery on Your First Order</div>
                <div className='text-lg my-3'>Use code FRESH10 at checkout for free delivery on orders over $30</div>
                <button onClick={() => navigate('/shop')} className='text-base my-3 bg-green-500 text-white py-2 px-4 rounded-3xl hover:bg-green-600 cursor-pointer'>Shop Now</button>
            </div>
        </div>
    )
}

export default FreeOrder
