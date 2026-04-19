import { useState, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import { products, categories } from '../data/mockData'
import ProductCard from '../components/ProductCard'

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [sortBy, setSortBy] = useState('popular')
  const [selectedRating, setSelectedRating] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    filtered = filtered.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    if (selectedRating > 0) {
      filtered = filtered.filter(p => p.rating >= selectedRating)
    }

    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'newest') {
      filtered.reverse()
    }

    return filtered
  }, [selectedCategory, priceRange, sortBy, selectedRating])

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        <h1 className='text-3xl font-bold mb-8'>All Products</h1>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {/* Sidebar Filters */}
          <div className={`${
            showFilters ? 'block' : 'hidden'
          } lg:block lg:col-span-1 bg-white rounded-xl p-6 card-shadow h-fit`}>
            <div className='flex items-center justify-between mb-4 lg:hidden'>
              <h3 className='font-bold text-lg'>Filters</h3>
              <button onClick={() => setShowFilters(false)} className='text-primary'>✕</button>
            </div>

            {/* Category Filter */}
            <div className='mb-6'>
              <h4 className='font-semibold mb-3'>Category</h4>
              <div className='space-y-2'>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === null
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  All Products
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat.name
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className='mb-6 pb-6 border-b'>
              <h4 className='font-semibold mb-3'>Price Range</h4>
              <div className='space-y-3'>
                <input
                  type='range'
                  min='0'
                  max='20000'
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className='w-full'
                />
                <div className='flex gap-2 text-sm'>
                  <span>₹{priceRange[0]}</span>
                  <span>-</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className='mb-6 pb-6 border-b'>
              <h4 className='font-semibold mb-3'>Rating</h4>
              <div className='space-y-2'>
                {[0, 4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => setSelectedRating(rating)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedRating === rating
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {rating === 0 ? 'All Ratings' : `${rating}★ & Above`}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSelectedCategory(null)
                setPriceRange([0, 200])
                setSortBy('popular')
                setSelectedRating(0)
              }}
              className='w-full py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold'
            >
              Clear Filters
            </button>
          </div>

          {/* Products */}
          <div className='lg:col-span-3'>
            {/* Sorting */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6'>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className='lg:hidden px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors'
              >
                Show Filters
              </button>
              <div className='flex items-center gap-2 ml-auto'>
                <span className='text-gray-600'>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className='px-4 py-2 border-2 border-gray-200 rounded-lg outline-none cursor-pointer'
                >
                  <option value='popular'>Most Popular</option>
                  <option value='newest'>Newest</option>
                  <option value='price-low'>Price: Low to High</option>
                  <option value='price-high'>Price: High to Low</option>
                  <option value='rating'>Highest Rating</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className='text-center py-12'>
                <p className='text-gray-500 text-lg'>No products found. Try adjusting your filters.</p>
              </div>
            )}

            {/* Results Count */}
            <div className='mt-8 text-center text-gray-600'>
              <p>Showing {filteredProducts.length} products</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
