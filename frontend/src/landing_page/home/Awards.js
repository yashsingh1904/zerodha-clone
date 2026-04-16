import React from 'react'

function Awards() {
  return (
    <div className='container mt-4'>
        <div className='row align-items-center'>
            {/* Image column - full width on mobile, half on medium+ */}
            <div className='col-12 col-md-6 p-3 p-md-4 text-center'>
                <img 
                  src="media/images/largestBroker.svg" 
                  className="img-fluid"
                  style={{maxWidth: '100%'}}
                  alt="Largest Broker"
                />
            </div>

            {/* Content column */}
            <div className='col-12 col-md-6 p-3 p-md-4'>
                <h1 className='mt-3 mt-md-4 mb-3 fs-3 fs-md-2 text-center text-md-start'>
                  Largest Stock Broker in India
                </h1>
                <p className='mb-3 text-center text-md-start'>
                  2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                </p>

                <div className='row mt-3'>
                    <div className='col-6'>
                        <ul className='mb-3 ps-3'>
                            <li className='mb-2'>Futures and Options</li>
                            <li className='mb-2'>Commodity Derivatives</li>
                            <li className='mb-2'>Currency Derivatives</li>
                        </ul>
                    </div>

                    <div className='col-6'>
                        <ul className='ps-3'>
                            <li className='mb-2'>Stocks & IPOs</li>
                            <li className='mb-2'>Direct Mutual Funds</li>
                            <li className='mb-2'>Bonds and Govt. Securities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards
