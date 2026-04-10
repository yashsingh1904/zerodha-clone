import React from 'react'

function Team() {
    return (
        <>

            <div className='container p-5 text-center '>

                <h2>People</h2>

                <div className='row align-items-center '>

                    <div className='col p-5 text-center '>

                        <img className='rounded-circle  item-center' src='media/images/nithinKamath.jpg' />
                        <h4 className='mt-4'> Nithin Kamarth</h4>
                        <p className='mt-3 text-muted'>Founder, CEO</p>
                    </div>

                    <div className='col text-center p-5'>

                        <h6 className='mt-4'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.Today, Zerodha has changed the landscape of the Indian broking industry.</h6>

                        <h6 className='mt-4'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC)</h6>



                    </div>

                </div>

                <div className='row p-3 '>

                     <div className='col p-2 text-center '>

                        <img className='rounded-circle  item-center' src='media/images/Nikhil.jpg'  style={{width:"70%"}} />
                        <h4 className='mt-4'> Nikhil Kamanth</h4>
                        <p className='mt-3 text-muted'> Co-Founder, CFO</p>
                    </div>

                     <div className='col p-2 text-center '>

                        <img className='rounded-circle  item-center' src='media/images/Kailash.jpg' style={{width:"70%"}} />
                        <h4 className='mt-4'> Dr. Kailash Nadh</h4>
                        <p className='mt-3 text-muted'>CTO</p>
                    </div>

                     <div className='col p-2 text-center '>

                        <img className='rounded-circle  item-center' src='media/images/Venu.jpg' style={{width:"70%"}}/>
                        <h4 className='mt-4'> Venu Madhav</h4>
                        <p className='mt-3 text-muted'>COO</p>
                    </div>

                </div>



                 <div className='row mt-5 p-5'>

                     <div className='col p-2 text-center '>

                        <img className='rounded-circle  item-center' src='media/images/Seema.jpg'  style={{width:"70%"}} />
                        <h4 className='mt-4'> Seema Patil</h4>
                        <p className='mt-3 text-muted'>Director</p>
                    </div>

                     <div className='col p-2 text-center '>

                        <img className='rounded-circle  item-center' src='media/images/Karthik.jpg' style={{width:"70%"}} />
                        <h4 className='mt-4'> Karthik Rangappa</h4>
                        <p className='mt-3 text-muted'>Cheif of Education</p>
                    </div>

                     <div className='col p-2 text-center '>

                        <img className='rounded-circle  item-center' src='media/images/Austin.jpg' style={{width:"70%"}}/>
                        <h4 className='mt-4'> Austin Prakesh</h4>
                        <p className='mt-3 text-muted'>Director Strategy</p>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Team