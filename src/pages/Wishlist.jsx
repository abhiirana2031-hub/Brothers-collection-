import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { useAppContext } from '../context/AppContext'

export default function Wishlist() {
  const { wishlistItems } = useAppContext()

  if (wishlistItems.length === 0) {
    return (
      <main className='pb-20 md:pb-0'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-8'>My Wishlist</h1>
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg mb-8'>Your wishlist is empty</p>
            <Link to='/categories' className='btn-primary inline-flex items-center gap-2'>
              Explore Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        <h1 className='text-3xl font-bold mb-8'>My Wishlist ({wishlistItems.length})</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {wishlistItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
