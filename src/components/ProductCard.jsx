import { Heart, ShoppingCart, Star, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext()
  const [imageError, setImageError] = useState(false)
  const isFavorited = isInWishlist(product.id)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className='bg-white rounded-lg sm:rounded-2xl overflow-hidden card-shadow group animate-fade-in'>
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className='relative overflow-hidden bg-gray-100 aspect-square block flex items-center justify-center group-hover:opacity-90 transition-opacity'>
        {imageError ? (
          <div className='w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300'>
            <Package size={48} className='text-gray-400 mb-2' />
            <span className='text-xs text-gray-500 text-center px-2'>Product Image</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            onError={() => setImageError(true)}
          />
        )}
        {product.badge && (
          <div className='absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold'>
            {product.badge}
          </div>
        )}
        {discount > 0 && (
          <div className='absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg text-xs font-bold'>
            -{discount}%
          </div>
        )}
        {!product.inStock && (
          <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
            <p className='text-white font-bold text-xs sm:text-sm'>Out of Stock</p>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className='p-3 sm:p-4'>
        <Link to={`/product/${product.id}`} className='block hover:text-primary transition-colors'>
          <h3 className='font-semibold text-gray-800 line-clamp-2 mb-2 text-sm sm:text-base'>{product.name}</h3>
        </Link>

        {/* Rating */}
        <div className='flex items-center gap-2 mb-2 sm:mb-3'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`sm:w-4 sm:h-4 ${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className='text-xs text-gray-600'>({product.reviews})</span>
        </div>

        {/* Price */}
        <div className='flex items-center gap-2 mb-3 sm:mb-4'>
          <span className='text-lg sm:text-xl font-bold text-primary'>₹{Math.round(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className='text-xs sm:text-sm text-gray-500 line-through'>₹{Math.round(product.originalPrice)}</span>
          )}
        </div>

        {/* Buttons */}
        <div className='flex gap-2'>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className='flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-base'
          >
            <ShoppingCart size={16} className='sm:w-5 sm:h-5' />
            <span className='hidden sm:inline'>Add</span>
          </button>
          <button
            onClick={() => toggleWishlist(product)}
            className={`px-2 sm:px-3 py-2 rounded-lg border-2 transition-all duration-300 flex items-center justify-center ${(
              isFavorited
                ? 'border-red-500 bg-red-50 text-red-500'
                : 'border-gray-300 hover:border-red-500 hover:text-red-500'
            )}`}
          >
            <Heart size={16} className='sm:w-5 sm:h-5' fill={isFavorited ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    </div>
  )
}
