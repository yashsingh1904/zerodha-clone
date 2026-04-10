import React from 'react'

function Awards() {
  return (
    <div className='container mt-4'>

        <div className='row'>

            <div className='col-6 p-4'>

            <img  src="media\images\largestBroker.svg"/>


            </div>


            <div className='col-6 p-4'>

                <h1 className=' mt-4 mb-3'> Largest Stock Broker in India</h1>
                <p1 className='mb-3'> 2+ millions zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p1>

                <div className='row mt-3'>

                    <div className='col'>
                    <ul className='mb-3'>
                        <li className='mb-2'>
                            Future and options
                        </li>

                        <li className='mb-2'>
                            Cmmodity derivatives
                        </li>

                        <li className='mb-2'>
                            Currency derivatives
                        </li>

                    </ul>

                    </div>


                       <div className='col'>
                    <ul>
                        <li className='mb-2'>
                            Stocks & IPOs
                        </li>

                        <li className='mb-2'>
                            Direct mutual funds
                        </li>

                        <li className='mb-2'>
                            Bonds and Govt. securities
                        </li>
                        
                    </ul>

                    </div>
                </div>
            
            </div>

        </div>






    </div>

  )
}

export default Awards

