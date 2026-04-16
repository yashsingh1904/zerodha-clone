import React from 'react'

function Hero() {
  return (
    <div className='container text-center mt-4 mt-md-5 px-3 px-md-5 py-4 py-md-5'>

      <h2>Charges</h2>
      <h4 className='text-muted mt-3'>List of all charges and taxes</h4>

      <div className='row align-items-center g-4 mt-2'>

        <div className='col-12 col-md-4 p-3 p-md-5'>
          <img src="media/images/pricing0.svg" className='img-fluid mb-3' style={{ maxHeight: '80px' }} alt="Free Equity Delivery" />
          <h3 className='p-2 fs-4'>Free Equity Delivery</h3>
          <h6 className='text-muted mt-1 fw-normal'>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </h6>
        </div>

        <div className='col-12 col-md-4 p-3 p-md-5'>
          <img src="media/images/intradayTrades.svg" className='img-fluid mb-3' style={{ maxHeight: '80px' }} alt="Intraday and F&O trades" />
          <h3 className='p-2 fs-4'>Intraday and F&O trades</h3>
          <h6 className='text-muted mt-1 fw-normal'>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </h6>
        </div>

        <div className='col-12 col-md-4 p-3 p-md-5'>
          <img src="media/images/pricing0.svg" className='img-fluid mb-3' style={{ maxHeight: '80px' }} alt="Free direct MF" />
          <h3 className='p-2 fs-4'>Free direct MF</h3>
          <h6 className='text-muted mt-1 fw-normal'>
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </h6>
        </div>

      </div>
    </div>
  )
}

export default Hero