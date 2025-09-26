import React from 'react'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Products from '../components/Products'
import FreeOrder from '../components/FreeOrder'

const Home = () => {

  return (
    <div className=''>
      <Hero/>
      <Category/>
      <Products/>
      <FreeOrder/>
    </div>
  )
}

export default Home
