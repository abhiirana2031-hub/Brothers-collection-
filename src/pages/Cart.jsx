import { Link } from 'react-router-dom'
import { Trash2, ArrowRight } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQuantity, getCartTotal } = useAppContext()

  if (cartItems.length === 0) {
    return (
      <main className='pb-20 md:pb-0'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-8'>Shopping Cart</h1>
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg mb-8'>Your cart is empty</p>
            <Link to='/categories' className='btn-primary inline-flex items-center gap-2'>
              Continue Shopping
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 4150 ? 0 : 200
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        <h1 className='text-3xl font-bold mb-8'>Shopping Cart</h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-4'>
            {cartItems.map(item => (
              <div
                key={item.id}
                className='bg-white rounded-xl p-4 md:p-6 card-shadow flex gap-4'
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg'
                />

                {/* Details */}
                <div className='flex-1'>
                  <Link
                    to={`/product/${item.id}`}
                    className='font-semibold text-gray-800 hover:text-primary transition-colors'
                  >
                    {item.name}
                  </Link>
                  <p className='text-primary font-bold text-lg my-2'>
                    ₹{Math.round(item.price)}
                  </p>

                  {/* Quantity Controls */}
                  <div className='flex items-center gap-2 mt-3'>
                    <span className='text-sm text-gray-600'>Qty:</span>
                    <div className='flex items-center border border-gray-300 rounded-lg'>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className='px-2 py-1 text-gray-600 hover:bg-gray-100'
                      >
                        −
                      </button>
                      <span className='px-3 py-1 font-semibold'>{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className='px-2 py-1 text-gray-600 hover:bg-gray-100'
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className='flex flex-col items-end justify-between'>
                  <p className='font-bold text-lg'>
                    ₹{Math.round(item.price * item.quantity)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors'
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className='bg-white rounded-xl p-6 card-shadow h-fit'>
            <h2 className='text-xl font-bold mb-6'>Order Summary</h2>

            <div className='space-y-4 mb-6 pb-6 border-b'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Subtotal</span>
                <span className='font-semibold'>₹{Math.round(subtotal)}</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Shipping</span>
                <span className='font-semibold'>
                  {shipping === 0 ? (
                    <span className='text-green-600'>FREE</span>
                  ) : (
                    `₹${Math.round(shipping)}`
                  )}
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Tax (10%)</span>
                <span className='font-semibold'>₹{Math.round(tax)}</span>
              </div>

              {shipping === 0 && (
                <div className='bg-green-50 border border-green-200 rounded-lg p-2 text-xs text-green-700'>
                  ✓ Free shipping applied
                </div>
              )}
            </div>

            <div className='flex justify-between items-center mb-6'>
              <span className='font-bold text-lg'>Total</span>
              <span className='text-3xl font-bold text-primary'>₹{Math.round(total)}</span>
            </div>

            <button className='w-full btn-primary mb-3'>Proceed to Checkout</button>
            <Link to='/categories' className='block w-full btn-secondary text-center'>
              Continue Shopping
            </Link>

            {/* Guarantees */}
            <div className='mt-6 pt-6 border-t space-y-2 text-xs text-gray-600'>
              <p>✓ Secure checkout</p>
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Free returns</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
