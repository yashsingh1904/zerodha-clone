import React from 'react'

function Hero() {
  return (
    <div className='container mt-4 mt-md-5 px-3 px-md-5 py-4 py-md-5'>
      <div className='row text-center mt-3 mt-md-5'>
        <h1 className='fs-2 fs-md-1'>Zerodha Products</h1>
        <h3 className='mt-2 mb-3 fs-5 fs-md-3'>
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className='mt-2'>
          Check out our{' '}
          <a className='text-decoration-none' href=''>
            investment offerings <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
      <hr />
    </div>
  )
}

export default Hero