import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      rating: 5,
      text: 'Brother Collections has the best selection of trendy fashion items! The quality is exceptional and shipping was super fast. Highly recommend!',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      id: 2,
      name: 'James Chen',
      role: 'Tech Reviewer',
      rating: 5,
      text: 'I bought a smartwatch and I&apos;m impressed with the product and customer service. They helped me with a technical question immediately.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Home Decor Lover',
      rating: 5,
      text: 'Finally found a store with quality home items at reasonable prices. The LED lamp I bought is perfect for my workspace!',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
    },
    {
      id: 4,
      name: 'Michael Park',
      role: 'Fitness Coach',
      rating: 5,
      text: 'Their sports section is amazing! Got high-quality yoga mats and running shoes. Perfect for my fitness journey.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    {
      id: 5,
      name: 'Jessica Williams',
      role: 'Busy Mom',
      rating: 5,
      text: 'Love the variety of products available. Found everything I needed for my family in one place. Great deals too!',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica'
    },
    {
      id: 6,
      name: 'David Martinez',
      role: 'Student',
      rating: 5,
      text: 'As a student with a tight budget, I appreciate the discount codes and sales. Amazing products for affordable prices.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
    }
  ]

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        <h1 className='text-4xl font-bold mb-2'>Customer Love</h1>
        <p className='text-gray-600 mb-12'>See what our happy customers are saying about Brother Collections</p>

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center'>
            <h3 className='text-5xl font-bold mb-2'>98%</h3>
            <p className='text-lg opacity-90'>Customer Satisfaction Rate</p>
          </div>
          <div className='bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-xl p-6 text-center'>
            <h3 className='text-5xl font-bold mb-2'>50K+</h3>
            <p className='text-lg opacity-90'>Happy Customers</p>
          </div>
          <div className='bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-6 text-center'>
            <h3 className='text-5xl font-bold mb-2'>4.8★</h3>
            <p className='text-lg opacity-90'>Average Rating</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className='bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow'>
              {/* Stars */}
              <div className='flex items-center gap-1 mb-3'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className='fill-yellow-400 text-yellow-400' />
                ))}
              </div>

              {/* Text */}
              <p className='text-gray-700 mb-4 line-clamp-3'>&quot;{testimonial.text}&quot;</p>

              {/* Author */}
              <div className='flex items-center gap-3 pt-4 border-t'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full bg-gray-200'
                />
                <div>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-xs text-gray-600'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Section */}
        <div className='bg-gradient-to-r from-blue-500 to-secondary rounded-2xl p-8 md:p-12 text-white'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Why Choose Brother Collections?</h2>
            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold'>✓</span>
                </div>
                <div>
                  <p className='font-semibold mb-1'>Wide Selection</p>
                  <p className='opacity-90'>Access to 10,000+ products across 8+ categories</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold'>✓</span>
                </div>
                <div>
                  <p className='font-semibold mb-1'>Best Prices</p>
                  <p className='opacity-90'>Competitive pricing with regular discounts and promotions</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                  <span className='text-secondary font-bold'>✓</span>
                </div>
                <div>
                  <p className='font-semibold mb-1'>Fast & Reliable</p>
                  <p className='opacity-90'>Quick shipping and 24/7 customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
