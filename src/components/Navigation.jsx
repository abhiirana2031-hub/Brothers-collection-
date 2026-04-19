import { ShoppingCart, Heart, Search, Menu, X, Home, Grid, User, LogOut } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { getCartCount, user, logoutUser } = useAppContext()

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Desktop Navigation */}
      <nav className='sticky top-0 z-40 bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link to='/' className='flex items-center gap-1 sm:gap-2 font-bold text-lg sm:text-2xl text-primary'>
              <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm'>
                BC
              </div>
              <span className='hidden sm:inline'>Brother Collections</span>
              <span className='inline sm:hidden text-xs'>Brother</span>
            </Link>

            {/* Search Bar - Desktop */}
            <div className='hidden md:flex flex-1 mx-4 lg:mx-8'>
              <div className='w-full flex items-center bg-lightGray border border-borderGray rounded-lg px-3 lg:px-4 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all'>
                <Search size={16} className='text-gray-500 lg:w-5 lg:h-5' />
                <input
                  type='text'
                  placeholder='Search products...'
                  className='bg-transparent ml-2 lg:ml-3 w-full outline-none text-sm lg:text-base'
                />
              </div>
            </div>

            {/* Desktop Icons */}
            <div className='hidden md:flex items-center gap-3 lg:gap-6'>
              {user.email && (
                <span className='text-xs lg:text-sm text-gray-600'>Hi, {user.name.split(' ')[0]}</span>
              )}
              <Link to='/wishlist' className='relative hover:text-primary transition-colors'>
                <Heart size={18} className='lg:w-6 lg:h-6' />
                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'></span>
              </Link>
              <Link to='/cart' className='relative hover:text-primary transition-colors'>
                <ShoppingCart size={18} className='lg:w-6 lg:h-6' />
                {getCartCount() > 0 && (
                  <span className='absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold'>
                    {getCartCount()}
                  </span>
                )}
              </Link>
              {user.email ? (
                <div className='dropdown-menu'>
                  <button className='hover:text-primary transition-colors'>
                    <User size={18} className='lg:w-6 lg:h-6' />
                  </button>
                </div>
              ) : (
                <Link to='/profile' className='hover:text-primary transition-colors'>
                  <User size={18} className='lg:w-6 lg:h-6' />
                </Link>
              )}
            </div>

            {/* Mobile Icons */}
            <div className='flex md:hidden items-center gap-2 sm:gap-3'>
              <Link to='/cart' className='relative hover:text-primary transition-colors'>
                <ShoppingCart size={18} />
                {getCartCount() > 0 && (
                  <span className='absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold'>
                    {getCartCount()}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='text-primary'
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='fixed inset-0 top-12 bg-black bg-opacity-50 z-30 md:hidden'>
          <div className='bg-white absolute right-0 top-0 bottom-0 w-56 sm:w-64 shadow-lg overflow-y-auto'>
            <div className='p-4 space-y-3'>
              <Link to='/' className='block py-2 hover:text-primary transition-colors font-semibold text-sm'>
                Home
              </Link>
              <Link to='/categories' className='block py-2 hover:text-primary transition-colors font-semibold text-sm'>
                Categories
              </Link>
              <Link to='/cart' className='block py-2 hover:text-primary transition-colors font-semibold text-sm flex items-center gap-2'>
                <ShoppingCart size={16} />
                Cart ({getCartCount()})
              </Link>
              <Link to='/wishlist' className='block py-2 hover:text-primary transition-colors font-semibold text-sm flex items-center gap-2'>
                <Heart size={16} />
                Wishlist
              </Link>
              <Link to='/testimonials' className='block py-2 hover:text-primary transition-colors font-semibold text-sm'>
                Reviews
              </Link>
              <Link to='/help' className='block py-2 hover:text-primary transition-colors font-semibold text-sm'>
                Help & Support
              </Link>
              <Link to='/profile' className='block py-2 hover:text-primary transition-colors font-semibold text-sm flex items-center gap-2'>
                <User size={16} />
                Profile
              </Link>
              {user.email && (
                <button
                  onClick={logoutUser}
                  className='w-full text-left py-2 text-red-500 font-semibold hover:text-red-700 transition-colors text-sm border-t'
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className='fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-40'>
        <div className='flex justify-around items-center py-1.5'>
          <Link
            to='/'
            className={`flex flex-col items-center gap-0.5 p-1.5 text-xs ${isActive('/') ? 'text-primary' : 'text-gray-600'}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to='/categories'
            className={`flex flex-col items-center gap-0.5 p-1.5 text-xs ${isActive('/categories') ? 'text-primary' : 'text-gray-600'}`}
          >
            <Grid size={18} />
            <span>Browse</span>
          </Link>
          <Link
            to='/wishlist'
            className={`flex flex-col items-center gap-0.5 p-1.5 text-xs ${isActive('/wishlist') ? 'text-primary' : 'text-gray-600'}`}
          >
            <Heart size={18} />
            <span>Wishlist</span>
          </Link>
          <Link
            to='/cart'
            className={`flex flex-col items-center gap-0.5 p-1.5 relative text-xs ${isActive('/cart') ? 'text-primary' : 'text-gray-600'}`}
          >
            <ShoppingCart size={18} />
            {getCartCount() > 0 && (
              <span className='absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold'>
                {getCartCount()}
              </span>
            )}
            <span>Cart</span>
          </Link>
          <Link
            to='/profile'
            className={`flex flex-col items-center gap-0.5 p-1.5 text-xs ${isActive('/profile') ? 'text-primary' : 'text-gray-600'}`}
          >
            <User size={18} />
            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
