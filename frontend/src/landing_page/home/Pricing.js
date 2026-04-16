import React from 'react'

function Pricing() {
    return (
        <div className='container mt-4 mt-md-5 p-3 p-md-5'>
            <div className='row'>
                {/* Text section */}
                <div className='col-12 col-lg-4 mb-4 mb-lg-0 text-center text-lg-start'>
                    <h3 className='mb-3'>Unbeatable Pricing</h3>
                    <p>
                      We pioneered the concept of discount broking and price transparency in India. 
                      Flat fees and no hidden charges.
                    </p>
                    <a className='text-decoration-none' href='#'>
                      See pricing <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

                {/* Spacer - hidden on mobile */}
                <div className='col-lg-2 d-none d-lg-block'></div>

                {/* Pricing cards */}
                <div className='col-12 col-lg-6'>
                    <div className='row'>
                        <div className='col-12 col-sm-4 text-center mb-4 mb-sm-0'>
                            <img 
                              className='img-fluid' 
                              src='media/images/pricing0.svg' 
                              alt="Free account"
                              style={{maxWidth: '80px'}}
                            />
                            <p className='mt-2 mx-auto small'>
                              Free account<br/> opening
                            </p>
                        </div>

                        <div className='col-12 col-sm-4 text-center mb-4 mb-sm-0'>
                            <img 
                              className='img-fluid' 
                              src='media/images/pricing0.svg' 
                              alt="Free equity"
                              style={{maxWidth: '80px'}}
                            />
                            <p className='mt-2 mx-auto small'>
                              Free equity delivery and direct mutual funds
                            </p>
                        </div>

                        <div className='col-12 col-sm-4 text-center'>
                            <img 
                              className='img-fluid' 
                              src='media/images/intradayTrades.svg' 
                              alt="Intraday"
                              style={{maxWidth: '80px'}}
                            />
                            <p className='mt-2 mx-auto small'>
                              Intraday and F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
