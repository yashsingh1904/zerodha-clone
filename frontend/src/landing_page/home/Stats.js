import React from 'react'

function Stats() {
  return (
    <div className='container mt-4 mt-md-5'>
        <div className='row'>
            {/* Text content - shows second on mobile (order-2), first on desktop (order-md-1) */}
            <div className='col-12 col-md-6 p-3 p-md-5 order-2 order-md-1'>
                <h3 className='mb-4 text-center text-md-start'>Trust With Confidence</h3>
                
                <h5 className='mt-3'>Customer-first always</h5>
                <p className='small'>
                  That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores 
                  of equity investments, making us India's largest broker; contributing 
                  to 15% of daily retail exchange volumes in India.
                </p>
                
                <h5 className='mt-3'>No spam or gimmicks</h5>
                <p className='small'>
                  No gimmicks, spam, "gamification", or annoying push notifications. 
                  High quality apps that you use at your pace, the way you like.
                </p>

                <h5 className='mt-3'>The Zerodha universe</h5>
                <p className='small'>
                  Not just an app, but a whole ecosystem. Our investments in 30+ fintech 
                  startups offer you tailored services specific to your needs.
                </p>
                
                <h5 className='mt-3'>Do better with money</h5>
                <p className='small'>
                  With initiatives like Nudge and Kill Switch, we don't just facilitate 
                  transactions, but actively help you do better with your money.
                </p>
            </div>

            {/* Image - shows first on mobile (order-1), second on desktop (order-md-2) */}
            <div className='col-12 col-md-6 p-3 p-md-5 order-1 order-md-2'>
                <img 
                  className="img-fluid w-100" 
                  src="media/images/ecosystem.png"
                  alt="Ecosystem"
                />  
                
                <div className='text-center mt-3'>
                    <a className='text-decoration-none d-block d-sm-inline me-sm-4 mb-2 mb-sm-0' href='#'>
                      Explore our Products <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                    <a className='text-decoration-none d-block d-sm-inline ms-sm-4' href='#'>
                      Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stats
