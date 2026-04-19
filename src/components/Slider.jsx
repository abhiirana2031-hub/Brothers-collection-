import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0)
  const [failedImages, setFailedImages] = useState(new Set())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <div className='relative h-64 md:h-96 rounded-2xl overflow-hidden group'>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {failedImages.has(index) ? (
            <div className={`w-full h-full bg-gradient-to-r ${slide.color} flex items-center justify-center`}>
              <div className='text-white ml-8 text-center'>
                <h2 className='text-4xl md:text-5xl font-bold mb-2 animate-slide-in-down'>{slide.title}</h2>
                <p className='text-xl md:text-2xl animate-slide-in-up'>{slide.subtitle}</p>
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
          <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center'>
            <div className='text-white ml-8'>
              <h2 className='text-4xl md:text-5xl font-bold mb-2 animate-slide-in-down'>{slide.title}</h2>
              <p className='text-xl md:text-2xl mb-6 animate-slide-in-up'>{slide.subtitle}</p>
              <button className='btn-primary'>Shop Now</button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
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

      {/* Dots */}
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
    </div>
  )
}
