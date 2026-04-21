import { Link } from 'react-router-dom'
import { banners, categories, products, brands } from '../data/mockData'
import Slider from '../components/Slider'
import ProductCard from '../components/ProductCard'
import { Truck, Shield, RotateCcw, Zap, Heart, Star, Award, Smartphone, Shirt, Home as HomeIcon, Dumbbell, BookOpen, Gamepad2, Package, Headphones, Footprints, Activity, Monitor } from 'lucide-react'

const categoryIconMap = {
  'Smartphone': Smartphone,
  'Shirt': Shirt,
  'Home': HomeIcon,
  'Dumbbell': Dumbbell,
  'BookOpen': BookOpen,
  'Gamepad2': Gamepad2,
  'Heart': Heart,
  'Package': Package,
}

const brandIconMap = {
  'Smartphone': Smartphone,
  'Headphones': Headphones,
  'Footprints': Footprints,
  'Activity': Activity,
  'Monitor': Monitor,
}

const getIcon = (iconName) => {
  return categoryIconMap[iconName] || Package
}

export default function Home() {
  const trending = products.slice(0, 4)
  const popular = products.slice(4, 8)

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        {/* Slider */}
        <Slider slides={banners} />

        {/* Trust Badges */}
        <section className='mt-8 md:mt-12'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4'>
            <div className='bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 card-shadow text-center'>
              <Truck size={24} className='sm:w-8 sm:h-8 mx-auto text-primary mb-1.5 sm:mb-2' />
              <h3 className='font-semibold text-xs sm:text-base mb-0.5 sm:mb-1'>Free Shipping</h3>
              <p className='text-xs text-gray-600'>On orders over ₹4,150</p>
            </div>
            <div className='bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 card-shadow text-center'>
              <RotateCcw size={24} className='sm:w-8 sm:h-8 mx-auto text-primary mb-1.5 sm:mb-2' />
              <h3 className='font-semibold text-xs sm:text-base mb-0.5 sm:mb-1'>Easy Returns</h3>
              <p className='text-xs text-gray-600'>30-day guarantee</p>
            </div>
            <div className='bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 card-shadow text-center'>
              <Shield size={24} className='sm:w-8 sm:h-8 mx-auto text-primary mb-1.5 sm:mb-2' />
              <h3 className='font-semibold text-xs sm:text-base mb-0.5 sm:mb-1'>Secure Payment</h3>
              <p className='text-xs text-gray-600'>100% protected</p>
            </div>
            <div className='bg-white rounded-lg sm:rounded-xl p-3 sm:p-6 card-shadow text-center'>
              <Award size={24} className='sm:w-8 sm:h-8 mx-auto text-primary mb-1.5 sm:mb-2' />
              <h3 className='font-semibold text-xs sm:text-base mb-0.5 sm:mb-1'>Quality Assured</h3>
              <p className='text-xs text-gray-600'>Best products</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className='mt-8 md:mt-12'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-4 sm:mb-6'>Shop by Category</h2>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3 md:gap-4'>
            {categories.slice(0, 8).map(category => {
              const Icon = getIcon(category.iconName)
              return (
                <Link
                  key={category.id}
                  to={`/categories?cat=${category.name}`}
                  className='rounded-lg sm:rounded-xl p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 card-shadow relative overflow-hidden group min-h-[100px] sm:min-h-[140px]'
                  style={{ 
                    backgroundImage: `url("${category.backgroundImage}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors'></div>
                  <div className='relative z-10 flex flex-col items-center'>
                    <Icon size={32} className='sm:w-8 sm:h-8 md:w-10 md:h-10 mb-1 sm:mb-2 text-white' />
                    <span className='font-bold text-xs sm:text-sm text-white drop-shadow-md'>{category.name}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className='mt-12'>
          <div className='bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200'>
            <h2 className='text-2xl font-bold mb-6 text-dark'>Why Shop at Brother Collections?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='flex gap-4'>
                <Zap size={32} className='text-primary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-bold mb-1'>Fast & Easy</h3>
                  <p className='text-gray-700'>Quick checkout, instant order confirmation, and real-time tracking</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <Heart size={32} className='text-secondary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-bold mb-1'>Customer Love</h3>
                  <p className='text-gray-700'>98% satisfaction rate with 24/7 customer support team</p>
                </div>
              </div>
              <div className='flex gap-4'>
                <Star size={32} className='text-accent flex-shrink-0 mt-1' />
                <div>
                  <h3 className='font-bold mb-1'>Premium Quality</h3>
                  <p className='text-gray-700'>Curated products from top brands with authenticity guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Now */}
        <section className='mt-12'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-3xl font-bold'>Trending Now</h2>
            <Link to='/categories' className='text-primary font-semibold hover:underline'>
              View All
            </Link>
          </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4'>
        {trending.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        </section>

        {/* Promo Banner */}
        <section className='mt-12'>
          <div 
            className='rounded-2xl p-8 md:p-12 text-white relative overflow-hidden group'
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/50 transition-colors'></div>
            <div className='relative z-10 max-w-2xl'>
              <h2 className='text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white'>Exclusive Offer</h2>
              <p className='text-lg md:text-xl mb-8 opacity-95 drop-shadow-md'>
                Get <span className='text-yellow-400 font-bold'>50% off</span> on your first order with code <span className='bg-white/20 backdrop-blur-md px-2 py-1 rounded font-mono'>WELCOME50</span>
              </p>
              <button className='bg-white text-blue-600 font-bold px-10 py-4 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg text-lg'>
                Claim Offer Now
              </button>
            </div>
          </div>
        </section>

        {/* Most Popular */}
        <section className='mt-12'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-3xl font-bold'>Most Popular</h2>
            <Link to='/categories' className='text-primary font-semibold hover:underline'>
              View All
            </Link>
          </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4'>
        {popular.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        </section>

        {/* Brands */}
        <section className='mt-12'>
          <h2 className='text-3xl font-bold mb-6'>Shop by Brand</h2>
          <div className='grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4'>
            {brands.map(brand => {
              const Icon = brandIconMap[brand.logo] || Package
              return (
                <div
                  key={brand.id}
                  className='rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 card-shadow border border-gray-100 relative overflow-hidden group min-h-[120px] sm:min-h-[160px]'
                  style={{ 
                    backgroundImage: `url("${brand.backgroundImage}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors'></div>
                  <div className='relative z-10 flex flex-col items-center'>
                    <Icon size={32} className='text-white mb-2 drop-shadow-md' />
                    <span className='text-xs font-bold text-white uppercase tracking-wider drop-shadow-md'>{brand.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className='mt-12 mb-12'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-3xl font-bold'>Customer Love</h2>
            <Link to='/testimonials' className='text-primary font-semibold hover:underline'>
              See More
            </Link>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              { name: 'Sarah Johnson', text: 'Amazing quality and fast shipping!', rating: 5 },
              { name: 'James Chen', text: 'Best shopping experience ever', rating: 5 },
              { name: 'Emily Rodriguez', text: 'Love the variety of products', rating: 5 }
            ].map((testimonial, i) => (
              <div key={i} className='bg-white rounded-xl p-6 card-shadow'>
                <div className='flex gap-1 mb-3'>
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} size={18} className='fill-yellow-400 text-yellow-400' />
                  ))}
                </div>
                <p className='text-gray-700 mb-4 italic'>&quot;{testimonial.text}&quot;</p>
                <p className='font-semibold text-gray-900'>{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Showcase */}
        <section className='mt-12 mb-12'>
          <h2 className='text-3xl font-bold mb-6'>Explore Our Collections</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Link 
              to='/categories?cat=Electronics' 
              className='rounded-2xl p-8 text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden relative min-h-[240px] flex items-end'
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className='absolute inset-0 bg-blue-900/60 group-hover:bg-blue-900/50 transition-colors'></div>
              <div className='relative z-10 w-full'>
                <h3 className='text-3xl font-bold mb-1'>Electronics & Gadgets</h3>
                <p className='opacity-90 mb-4 text-sm'>Latest tech products at unbeatable prices</p>
                <span className='inline-block font-bold text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg'>Explore Now →</span>
              </div>
            </Link>
            <Link 
              to='/categories?cat=Fashion' 
              className='rounded-2xl p-8 text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden relative min-h-[240px] flex items-end'
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className='absolute inset-0 bg-pink-900/60 group-hover:bg-pink-900/50 transition-colors'></div>
              <div className='relative z-10 w-full'>
                <h3 className='text-3xl font-bold mb-1'>Fashion & Apparel</h3>
                <p className='opacity-90 mb-4 text-sm'>Trendy styles for every occasion</p>
                <span className='inline-block font-bold text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg'>Explore Now →</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Help & Support Preview */}
        <section className='mt-12'>
          <div 
            className='rounded-2xl p-8 md:p-12 text-white relative overflow-hidden'
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='absolute inset-0 bg-cyan-900/70'></div>
            <div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-6'>
              <div>
                <h2 className='text-3xl md:text-5xl font-bold mb-2'>Need Help?</h2>
                <p className='text-lg md:text-xl opacity-90'>Check our FAQ or contact our professional support team 24/7</p>
              </div>
              <Link to='/help' className='bg-white text-cyan-900 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap'>
                Get Professional Help
              </Link>
            </div>
          </div>
        </section>

        {/* Email Subscription */}
        <section className='mt-12 mb-12'>
          <div 
            className='rounded-2xl p-8 md:p-16 text-white relative overflow-hidden text-center md:text-left'
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className='absolute inset-0 bg-emerald-900/80'></div>
            <div className='relative z-10 max-w-2xl'>
              <h2 className='text-3xl md:text-5xl font-bold mb-3'>Subscribe to Our Newsletter</h2>
              <p className='text-lg mb-8 opacity-90'>Get exclusive deals, new arrivals, and insider tips delivered to your inbox weekly.</p>
              <div className='flex flex-col sm:flex-row gap-3'>
                <input
                  type='email'
                  placeholder='Enter your professional email'
                  className='flex-1 px-5 py-4 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-white transition-all shadow-inner'
                />
                <button className='bg-white text-emerald-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-md'>
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
