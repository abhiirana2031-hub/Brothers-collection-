import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0)
  const [failedImages, setFailedImages] = useState(new Set())
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Disable autoplay on mobile

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length, isMobile])

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <div className={`relative ${isMobile ? 'h-auto pb-4' : 'h-64 md:h-96'} rounded-2xl overflow-hidden group`}>
      {/* Slides */}
      {slides.map((slide, index) => {
        const isVisible = isMobile ? index === 0 : index === current
        
        if (isMobile && index !== 0) return null

        return (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              isMobile ? 'relative' : 'absolute inset-0'
            } ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className='relative aspect-[16/9] md:aspect-auto md:h-full'>
              {failedImages.has(index) ? (
                <div className={`w-full h-full bg-gradient-to-r ${slide.color} flex items-center justify-center`}>
                  <div className='text-white px-4 text-center'>
                    <h2 className='text-2xl md:text-5xl font-bold mb-2'>{slide.title}</h2>
                    <p className='text-base md:text-2xl'>{slide.subtitle}</p>
                  </div>
                </div>
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  className='w-full h-full object-cover'
                  onError={() => setFailedImages(prev => new Set([...prev, index]))}
                />
              )}
              <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center'>
                <div className='text-white ml-6 md:ml-12 pr-6'>
                  <h2 className='text-2xl md:text-5xl font-bold mb-1 md:mb-2 leading-tight'>{slide.title}</h2>
                  <p className='text-sm md:text-2xl mb-4 md:mb-6 opacity-90'>{slide.subtitle}</p>
                  <button className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-base transition-colors'>
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Navigation Buttons - Hidden on mobile */}
      {!isMobile && (
        <>
          <button
            onClick={prev}
            className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10'
          >
            <ChevronLeft size={24} className='text-primary' />
          </button>
          <button
            onClick={next}
            className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10'
          >
            <ChevronRight size={24} className='text-primary' />
          </button>

          {/* Dots - Hidden on mobile */}
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? 'bg-white w-8' : 'bg-white/50 w-2'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
