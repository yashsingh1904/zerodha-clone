import React from 'react'

function Pricing() {
    return (
        <div className='container mt-5 p-5'>

            <div className='row'>

                <div className='col-4 '>
                    <h3 className='mb-3'>Unbeatable Pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='text-decoration-none' href='' >See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>

                <div className='col-2'></div>
                <div className='col-6'>

                    <div className='row'>

                        <div className='col text-center '>


                            <img className='' src='media\images\pricing0.svg' />
                            <p className='mt-1 mx-auto'>Free account<br></br> opening</p>


                        </div>

                        <div className='col text-center '>


                            <img className='' src='media\images\pricing0.svg' />
                            <p className='mt-1 mx-auto'>Free equity delivery
                                and direct mutual funds</p>


                        </div>

                        <div className='col text-center '>


                            <img className='' src='media\images\intradayTrades.svg' />
                            <p className='mt-1 mx-auto'> Intraday and
                                F&O</p>


                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Pricing