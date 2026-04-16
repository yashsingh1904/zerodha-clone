import React from 'react'

function Hero() {
  return (
    <div className='container p-3 p-md-5'>
        <div className='row text-center p-3 p-md-5'>
            <img 
              src="/media/images/homeHero.png" 
              className="mb-2 p-1 img-fluid mx-auto" 
              style={{maxWidth: '80%'}}
              alt="hero" 
            />
            <h1 className='mt-2 fs-2 fs-md-1'>Invest in everything</h1>
            <p className='m-1 px-2 px-md-5'>
              Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>
            <button 
              type="button" 
              className="btn btn-primary btn-lg w-75 w-sm-50 w-md-25 mx-auto mt-3 py-2"
              style={{maxWidth: '300px', minWidth: '200px'}}
            >
              Sign up for free
            </button>
        </div>
    </div>
  )
}

export default Hero
