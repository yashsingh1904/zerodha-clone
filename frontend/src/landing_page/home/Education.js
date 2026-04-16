import React from 'react'

function Education() {
  return (
    <div className='container py-4'>
        <div className='row align-items-center'>
            {/* Image - stacks on top for mobile */}
            <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                <img 
                  src='media/images/education.svg' 
                  className='img-fluid'
                  style={{maxWidth: '100%'}}
                  alt="Education"
                />
            </div>

            {/* Content */}
            <div className='col-12 col-md-6 py-3 text-center text-md-start'>
                <h4 className='mb-3'>Free and open market education</h4>
                <p>
                  Varsity, the largest online stock market education book in the world 
                  covering everything from the basics to advanced trading.
                </p>
                <a className='text-decoration-none' href='#'>
                  Varsity <i className="fa-solid fa-arrow-right-long"></i>
                </a>

                <p className='mt-4'>
                  TradingQ&A, the most active trading and investment community in India 
                  for all your market related queries.
                </p>
                <a className='text-decoration-none' href='#'>
                  Trading Q&A <i className="fa-solid fa-arrow-right-long"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Education
