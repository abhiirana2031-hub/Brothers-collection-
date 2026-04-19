import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-dark text-white py-6 md:py-12 mt-16 md:mt-20 mb-20 md:mb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4'>
        {/* Desktop Layout */}
        <div className='hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* About */}
          <div>
            <h3 className='font-bold text-lg mb-4 flex items-center gap-2'>
              <div className='w-6 h-6 bg-primary rounded-lg'></div>
              Brother Collections
            </h3>
            <p className='text-gray-400 text-sm mb-4'>
              Premium fashion, electronics, and lifestyle products for the modern family. Trusted by thousands of happy customers worldwide.
            </p>
            <div className='flex gap-3'>
              <Facebook size={20} className='hover:text-primary cursor-pointer transition-colors' />
              <Twitter size={20} className='hover:text-primary cursor-pointer transition-colors' />
              <Instagram size={20} className='hover:text-primary cursor-pointer transition-colors' />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='font-semibold mb-4 text-sm'>Quick Links</h4>
            <ul className='space-y-2 text-gray-400 text-xs'>
              <li><Link to='/' className='hover:text-primary transition-colors'>Home</Link></li>
              <li><Link to='/categories' className='hover:text-primary transition-colors'>Shop</Link></li>
              <li><Link to='/testimonials' className='hover:text-primary transition-colors'>Why Us</Link></li>
              <li><Link to='/help' className='hover:text-primary transition-colors'>Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className='font-semibold mb-4 text-sm'>Support</h4>
            <ul className='space-y-2 text-gray-400 text-xs'>
              <li><Link to='/help' className='hover:text-primary transition-colors'>Help Center</Link></li>
              <li><Link to='/help' className='hover:text-primary transition-colors'>Track Order</Link></li>
              <li><Link to='/help' className='hover:text-primary transition-colors'>Returns & Exchange</Link></li>
              <li><Link to='/help' className='hover:text-primary transition-colors'>FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='font-semibold mb-4 text-sm'>Contact Us</h4>
            <ul className='space-y-2 text-gray-400 text-xs'>
              <li className='flex items-center gap-2'>
                <Phone size={14} className='text-primary flex-shrink-0' />
                <span>+1 (800) BROTHER</span>
              </li>
              <li className='flex items-center gap-2'>
                <Mail size={14} className='text-primary flex-shrink-0' />
                <span>support@brothercollections.com</span>
              </li>
              <li className='flex items-start gap-2'>
                <MapPin size={14} className='text-primary flex-shrink-0 mt-0.5' />
                <span>123 Fashion St, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout - Compact */}
        <div className='md:hidden mb-4'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-5 h-5 bg-primary rounded'></div>
            <h3 className='font-bold text-sm'>Brother Collections</h3>
          </div>
          <div className='flex gap-3 mb-3'>
            <Facebook size={16} className='hover:text-primary cursor-pointer transition-colors' />
            <Twitter size={16} className='hover:text-primary cursor-pointer transition-colors' />
            <Instagram size={16} className='hover:text-primary cursor-pointer transition-colors' />
          </div>
          {/* Single line navigation for mobile */}
          <div className='flex flex-wrap gap-3 text-gray-400 text-xs mb-3'>
            <Link to='/' className='hover:text-primary transition-colors'>Home</Link>
            <span className='text-gray-600'>•</span>
            <Link to='/categories' className='hover:text-primary transition-colors'>Shop</Link>
            <span className='text-gray-600'>•</span>
            <Link to='/testimonials' className='hover:text-primary transition-colors'>Why Us</Link>
            <span className='text-gray-600'>•</span>
            <Link to='/help' className='hover:text-primary transition-colors'>Contact</Link>
          </div>
          <p className='text-gray-400 text-xs mb-2'>
            support@brothercollections.com | +1 (800) BROTHER
          </p>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-700 pt-4'>
          <div className='flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs md:text-sm gap-2 md:gap-0'>
            <p>&copy; 2024 Brother Collections. All rights reserved.</p>
            <div className='flex gap-4 md:gap-6 text-xs md:text-sm'>
              <a href='#' className='hover:text-primary transition-colors'>Privacy</a>
              <a href='#' className='hover:text-primary transition-colors'>Terms</a>
              <a href='#' className='hover:text-primary transition-colors'>Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
