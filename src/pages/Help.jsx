import { ChevronDown, MessageCircle, Truck, RotateCcw, CreditCard } from 'lucide-react'
import { useState } from 'react'

export default function Help() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      id: 1,
      question: 'What is the return policy?',
      answer: 'We offer a 30-day money-back guarantee on all products. If you are not satisfied with your purchase, simply return it in original condition for a full refund.'
    },
    {
      id: 2,
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days. Free shipping on orders over ₹4,150.'
    },
    {
      id: 3,
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to over 100 countries. International shipping fees vary based on location and weight. Estimated delivery time is 10-21 business days.'
    },
    {
      id: 4,
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email. Use it on our Track Order page to monitor your delivery in real-time.'
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and digital wallets. All transactions are secure and encrypted.'
    },
    {
      id: 6,
      question: 'Can I modify my order?',
      answer: 'Orders can be modified within 1 hour of purchase before they are processed. Please contact our support team immediately if you need changes.'
    },
    {
      id: 7,
      question: 'Do you have a loyalty program?',
      answer: 'Yes! Join our loyalty program to earn points on every purchase. Points can be redeemed for discounts, free shipping, and exclusive products.'
    },
    {
      id: 8,
      question: 'How can I contact customer support?',
      answer: 'You can reach us via live chat (available 24/7), email at support@brothercollections.com, or call 1-800-BROTHER. Average response time is under 5 minutes.'
    }
  ]

  return (
    <main className='pb-20 md:pb-0'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8'>
        <h1 className='text-4xl font-bold mb-2'>Help & Support</h1>
        <p className='text-gray-600 mb-12'>We&apos;re here to help! Find answers to common questions or contact our support team.</p>

        {/* Quick Support Options */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-12'>
          <div className='bg-white rounded-xl p-6 card-shadow text-center hover:shadow-lg transition-shadow'>
            <MessageCircle size={40} className='mx-auto text-primary mb-3' />
            <h3 className='font-bold mb-2'>Live Chat</h3>
            <p className='text-sm text-gray-600 mb-4'>Chat with our team now</p>
            <button className='text-primary font-semibold hover:underline'>Start Chat</button>
          </div>
          <div className='bg-white rounded-xl p-6 card-shadow text-center hover:shadow-lg transition-shadow'>
            <Truck size={40} className='mx-auto text-primary mb-3' />
            <h3 className='font-bold mb-2'>Track Order</h3>
            <p className='text-sm text-gray-600 mb-4'>Track your delivery status</p>
            <button className='text-primary font-semibold hover:underline'>Track Now</button>
          </div>
          <div className='bg-white rounded-xl p-6 card-shadow text-center hover:shadow-lg transition-shadow'>
            <RotateCcw size={40} className='mx-auto text-primary mb-3' />
            <h3 className='font-bold mb-2'>Returns</h3>
            <p className='text-sm text-gray-600 mb-4'>Start a return or exchange</p>
            <button className='text-primary font-semibold hover:underline'>Learn More</button>
          </div>
          <div className='bg-white rounded-xl p-6 card-shadow text-center hover:shadow-lg transition-shadow'>
            <CreditCard size={40} className='mx-auto text-primary mb-3' />
            <h3 className='font-bold mb-2'>Payments</h3>
            <p className='text-sm text-gray-600 mb-4'>Billing & payment info</p>
            <button className='text-primary font-semibold hover:underline'>View Details</button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='bg-white rounded-2xl p-8 card-shadow'>
          <h2 className='text-3xl font-bold mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            {faqs.map((faq, index) => (
              <div key={faq.id} className='border-2 border-gray-200 rounded-lg overflow-hidden'>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className='w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors'
                >
                  <h3 className='font-semibold text-left'>{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-primary transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className='px-4 pb-4 bg-gray-50 border-t border-gray-200'>
                    <p className='text-gray-700'>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className='mt-12 bg-gradient-to-r from-blue-500 to-secondary rounded-2xl p-8 md:p-12 text-white'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Still Need Help?</h2>
            <p className='text-lg mb-8 opacity-90'>
              Our dedicated support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <div className='space-y-3 mb-8'>
              <p className='flex items-center gap-3'>
                <span className='inline-block w-2 h-2 bg-white rounded-full'></span>
                Email: support@brothercollections.com
              </p>
              <p className='flex items-center gap-3'>
                <span className='inline-block w-2 h-2 bg-white rounded-full'></span>
                Phone: +1 (800) BROTHER
              </p>
              <p className='flex items-center gap-3'>
                <span className='inline-block w-2 h-2 bg-white rounded-full'></span>
                Available Monday - Sunday, 24 Hours
              </p>
            </div>
            <button className='bg-white text-primary font-bold px-8 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300'>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
