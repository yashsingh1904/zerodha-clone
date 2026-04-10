import React from 'react'

function Hero() {
    return (
        <div className='container text-center mt-5 p-5'>

            <h2>Charges</h2>
            <h4 className='text-muted mt-3'>List of all charges and taxes</h4>

            <div className='row align-items-center'>

                <div className='col-4 text-denter p-5 '>
                    <img src="media\images\pricing0.svg" />
                    <h3 className='p-2'>Free Equity Delivery</h3>
                    <h6 className='text-muted mt-1'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h6>

                </div>

                <div className='col-4 text-denter p-5 '>
                    <img src="media\images\intradayTrades.svg" />
                    <h3 className='p-2'>Intraday and F&O trades</h3>
                    <h6 className='text-muted mt-1'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades..</h6>

                </div>

                <div className='col-4 text-denter p-5 '>
                    <img src="media\images\pricing0.svg" />
                    <h3 className='p-2'>Free direct MF</h3>
                    <h6 className='text-muted mt-1'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h6>

                </div>

            </div>

        </div>
    )
}

export default Hero