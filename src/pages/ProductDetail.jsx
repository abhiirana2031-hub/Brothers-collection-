import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, Headphones, Phone, Shirt, Lightbulb, Activity, BookOpen, Gamepad2, Coffee, Droplet, Glasses, Wind, Zap, Footprints, Watch, Puzzle, Package } from 'lucide-react'
import { products } from '../data/mockData'
import { useAppContext } from '../context/AppContext'

const iconMap = {
  'Headphones': Headphones,
  'Phone': Phone,
  'Shirt': Shirt,
  'Lightbulb': Lightbulb,
  'Activity': Activity,
  'BookOpen': BookOpen,
  'Gamepad2': Gamepad2,
  'Coffee': Coffee,
  'Droplet': Droplet,
  'Glasses': Glasses,
  'Jacket': Wind,
  'Zap': Zap,
  'Footprints': Footprints,
  'Watch': Watch,
  'Puzzle': Puzzle,
}

const getIcon = (iconName) => {
  return iconMap[iconName] || Package
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [quantity, setQuantity] = useState(1)
  const { addToCart, toggleWishlist, isInWishlist } = useAppContext()
  const isFavorited = isInWishlist(product?.id || 0)

  if (!product) {
    return (
      <div className='pb-20 md:pb-0'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <p className='text-center text-gray-500'>Product not found</p>
        </div>
      </div>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        {/* Breadcrumb */}
        <div className='flex gap-2 mb-8 text-gray-600'>
          <span>Home</span>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className='text-primary'>{product.name}</span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          {/* Images */}
          <div>
            <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl overflow-hidden aspect-square mb-4 flex items-center justify-center'>
              {(() => {
                const Icon = getIcon(product.iconName)
                return <Icon size={120} className='text-primary opacity-80' />
              })()}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className='mb-4'>
              {product.badge && (
                <span className='inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold mb-2'>
                  {product.badge}
                </span>
              )}
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>{product.name}</h1>
            </div>

            {/* Rating */}
            <div className='flex items-center gap-4 mb-6 pb-6 border-b'>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className='text-gray-600'>{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className='mb-6 pb-6 border-b'>
              <div className='flex items-center gap-4 mb-2'>
                <h2 className='text-4xl font-bold text-primary'>${product.price.toFixed(2)}</h2>
                <span className='text-2xl text-gray-400 line-through'>${product.originalPrice.toFixed(2)}</span>
                <span className='bg-red-100 text-red-600 px-3 py-1 rounded-lg font-bold'>-{discount}%</span>
              </div>
              <p className='text-green-600 font-semibold'>Save ${(product.originalPrice - product.price).toFixed(2)}</p>
            </div>

            {/* Stock Status */}
            <div className='mb-6 pb-6 border-b'>
              {product.inStock ? (
                <p className='text-green-600 font-semibold flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  In Stock
                </p>
              ) : (
                <p className='text-red-600 font-semibold flex items-center gap-2'>
                  <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                  Out of Stock
                </p>
              )}
            </div>

            {/* Description */}
            <div className='mb-6 pb-6 border-b'>
              <h3 className='font-semibold text-lg mb-2'>Description</h3>
              <p className='text-gray-600'>{product.description}</p>
            </div>

            {/* Quantity */}
            <div className='mb-6 pb-6 border-b flex items-center gap-4'>
              <span className='font-semibold'>Quantity:</span>
              <div className='flex items-center border-2 border-gray-300 rounded-lg'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-3 py-2 text-gray-600 hover:text-primary transition-colors'
                >
                  −
                </button>
                <span className='px-4 py-2 font-semibold'>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-3 py-2 text-gray-600 hover:text-primary transition-colors'
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
              <button
                onClick={() => {
                  addToCart(product)
                  for (let i = 1; i < quantity; i++) {
                    addToCart(product)
                  }
                }}
                disabled={!product.inStock}
                className='btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`border-2 rounded-lg py-3 font-semibold transition-all flex items-center justify-center gap-2 ${
                  isFavorited
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-gray-300 hover:border-red-500 hover:text-red-500'
                }`}
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                {isFavorited ? 'Favorited' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Features */}
            <div className='space-y-3 text-sm'>
              <div className='flex items-center gap-3 p-3 bg-blue-50 rounded-lg'>
                <Truck size={20} className='text-primary' />
                <span>Free shipping on orders over ₹4,150</span>
              </div>
              <div className='flex items-center gap-3 p-3 bg-green-50 rounded-lg'>
                <Shield size={20} className='text-green-600' />
                <span>2-year warranty included</span>
              </div>
              <div className='flex items-center gap-3 p-3 bg-purple-50 rounded-lg'>
                <RotateCcw size={20} className='text-purple-600' />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className='bg-white rounded-2xl p-8 card-shadow'>
          <h2 className='text-2xl font-bold mb-6'>Customer Reviews</h2>
          <div className='space-y-6'>
            {[1, 2, 3].map(i => (
              <div key={i} className='pb-6 border-b last:border-b-0'>
                <div className='flex items-center gap-4 mb-2'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold'>
                    JD
                  </div>
                  <div>
                    <p className='font-semibold'>John Doe</p>
                    <div className='flex items-center gap-1'>
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className='fill-yellow-400 text-yellow-400' />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-gray-700'>Great product! Exceeded my expectations. Highly recommended!</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
