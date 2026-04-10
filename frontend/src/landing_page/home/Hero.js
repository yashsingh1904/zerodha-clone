import React from 'react'

function Hero() {
  return (
    <div className='container p-5 '>

        <div className='row text-center p-5 '>

            <img src="/media/images/homeHero.png"  className ="mb-2 p-1 " alt="hero" />
            <h1 className='mt-2'>Invest in everything</h1>
            <p className='m-1'> Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button type="button" class="btn btn-primary btn-lg w-25 mx-auto mt-3 py-2 ">sign up for free</button>
        </div>
    </div>
  )
}

export default Hero