import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Smooth scroll to top with animation
  const scrollToTop = () => {
    setIsAnimating(true)
    
    const scrollDuration = 800
    const scrollStep = -window.scrollY / (scrollDuration / 15)

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
        setIsAnimating(false)
      }
    }, 15)
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <button 
        onClick={scrollToTop}
        disabled={isAnimating}
        className={`group bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isAnimating ? 'animate-pulse' : 'hover:-translate-y-1'
        }`}
      >
        <ChevronUp 
          size={24} 
          className={`transition-transform duration-300 ${
            isAnimating ? 'animate-bounce' : 'group-hover:-translate-y-0.5'
          }`} 
        />
      </button>
    </div>
  )
}

export default ScrollToTop
