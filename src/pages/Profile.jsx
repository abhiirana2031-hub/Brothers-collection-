import { useState } from 'react'
import { User, Mail, LogOut, Package, Heart } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function Profile() {
  const { user, loginUser, logoutUser, addOrder } = useAppContext()
  const [isLoginMode, setIsLoginMode] = useState(!user.email)
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleLogin = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      loginUser(formData.name, formData.email)
      setFormData({ name: '', email: '' })
      setIsLoginMode(false)
    }
  }

  const handleLogout = () => {
    logoutUser()
    setIsLoginMode(true)
  }

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        {isLoginMode ? (
          // Login Form
          <div className='max-w-md mx-auto mt-12'>
            <div className='bg-white rounded-2xl p-8 card-shadow'>
              <h1 className='text-3xl font-bold mb-2 text-center'>Welcome Back</h1>
              <p className='text-gray-600 text-center mb-8'>Sign in to your account</p>

              <form onSubmit={handleLogin} className='space-y-4'>
                <div>
                  <label className='block text-sm font-semibold mb-2'>Full Name</label>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-primary transition-colors'
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold mb-2'>Email</label>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none focus:border-primary transition-colors'
                    required
                  />
                </div>
                <button type='submit' className='w-full btn-primary py-3 mt-6'>
                  Sign In
                </button>
              </form>

              <p className='text-center text-gray-600 text-sm mt-6'>
                Demo account - enter any name and valid email
              </p>
            </div>
          </div>
        ) : (
          // User Dashboard
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {/* Sidebar */}
            <div className='md:col-span-1'>
              <div className='bg-white rounded-2xl p-6 card-shadow'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold'>
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className='font-bold'>{user.name}</p>
                    <p className='text-sm text-gray-600'>{user.email}</p>
                  </div>
                </div>

                <nav className='space-y-2'>
                  <button className='w-full text-left px-4 py-2 rounded-lg font-semibold text-primary bg-blue-50 flex items-center gap-2'>
                    <User size={18} />
                    My Profile
                  </button>
                  <button className='w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2'>
                    <Package size={18} />
                    Orders
                  </button>
                  <button className='w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2'>
                    <Heart size={18} />
                    Wishlist
                  </button>
                  <button
                    onClick={handleLogout}
                    className='w-full text-left px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 flex items-center gap-2 mt-4 border-t'
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className='md:col-span-3 space-y-6'>
              {/* Profile Info */}
              <div className='bg-white rounded-2xl p-8 card-shadow'>
                <h2 className='text-2xl font-bold mb-6'>Profile Information</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Full Name</label>
                    <p className='px-4 py-3 border-2 border-gray-200 rounded-lg'>{user.name}</p>
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-600 mb-2'>Email</label>
                    <p className='px-4 py-3 border-2 border-gray-200 rounded-lg'>{user.email}</p>
                  </div>
                </div>
                <button className='btn-primary mt-6'>Edit Profile</button>
              </div>

              {/* Orders */}
              <div className='bg-white rounded-2xl p-8 card-shadow'>
                <h2 className='text-2xl font-bold mb-6'>My Orders</h2>
                {user.orders.length === 0 ? (
                  <div className='text-center py-12'>
                    <Package size={48} className='mx-auto text-gray-300 mb-4' />
                    <p className='text-gray-500'>No orders yet</p>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {user.orders.map((order, idx) => (
                      <div key={idx} className='border-2 border-gray-200 rounded-lg p-4 flex items-center justify-between'>
                        <div>
                          <p className='font-semibold'>Order #{idx + 1}</p>
                          <p className='text-sm text-gray-600'>{order.date}</p>
                        </div>
                        <div className='text-right'>
                          <p className='font-bold text-lg'>₹{Math.round(order.total)}</p>
                          <button className='text-primary hover:underline text-sm'>View Details</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preferences */}
              <div className='bg-white rounded-2xl p-8 card-shadow'>
                <h2 className='text-2xl font-bold mb-6'>Preferences</h2>
                <div className='space-y-4'>
                  <label className='flex items-center gap-3 cursor-pointer'>
                    <input type='checkbox' defaultChecked className='w-5 h-5' />
                    <span>Receive promotional emails</span>
                  </label>
                  <label className='flex items-center gap-3 cursor-pointer'>
                    <input type='checkbox' defaultChecked className='w-5 h-5' />
                    <span>Receive order updates</span>
                  </label>
                  <label className='flex items-center gap-3 cursor-pointer'>
                    <input type='checkbox' className='w-5 h-5' />
                    <span>Receive newsletter</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
