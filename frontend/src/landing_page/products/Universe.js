import React from 'react'

function Universe() {
    return (
        <div className='container text-center p-5 mt-5 border-top'>

            <h2>The Zerodha Universe</h2>
            <p>Extend your trading and investment experience even further with our partner platforms</p>

            <div className='row'>

                <div className='col-4 p-5'>
                    <img src="media\images\zerodhaFundhouse.png" style={{ width: "50%" }} />
                    <p className='text-muted text-center px-5 mt-2 py-2'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goal</p>

                </div>

                <div className='col-4 p-5'>
                    <img src="media\images\sensibullLogo.svg" style={{ width: "50%" }} />
                    <p className='text-muted text-center px-5 mt-2 py-2'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.</p>

                </div>

                <div className='col-4 p-5'>
                    <img src="media\images\dittoLogo.png" style={{ width: "40%" }} />
                    <p className='text-muted text-center px-5 mt-2 py-2'>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>

                </div>

            </div>



            <div className='row'>

                <div className='col-4 p-5'>
                    <img src="media\images\streakLogo.png" style={{ width: "50%" }} />
                    <p className='text-muted text-center px-5 mt-2 py-2'>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>

                </div>

                <div className='col-4 p-5'>
                    <img src="media\images\tijori.svg" style={{ width: "50%" }} />
                    <p className='text-muted text-center px-5 mt-2 py-2'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>

                </div>

                <div className='col-4 p-5'>
                    <img src="media\images\smallcaseLogo.png" style={{ width: "50%" }} />
                    <p className='text-muted text-center px-5 mt-2 py-2'>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>

                </div>

                 <button type="button" class="btn btn-primary btn-lg w-25 mx-auto mt-3 py-2 ">sign up for free</button>

            </div>

        </div>
    )
}

export default Universe