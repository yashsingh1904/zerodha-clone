import React from 'react'

function Stats() {
  return (
    <div className='container mt-5'>

    <div className='row'>

        <div className='col-6 p-5 mt-5'>

            <h3 className='mb-4'>Trust With Confidence</h3>
            
            <h4 className='mt-1'>Customer-first always</h4>
            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
            
            <h4 className='mt-1'>No spam or gimmicks</h4>
            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies..</p>

            <h4 className='mt-1'>The Zerodha universe</h4>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            
            <h4 className='mt-1'>Do better with money</h4>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            


        </div>


        <div className='col-6 p-5 mx-auto'>

        <img   className="mt-3 mx-auto" style={{width:"100%" }} src="media\images\ecosystem.png"/>  
        
        <div className='mx-auto text-center'>
            <a  className='me-4 text-decoration-none' href=''>Explore our Products <i class="fa-solid fa-arrow-right-long"></i></a>
            <a  className='ms-4 text-decoration-none' href=''>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>

        </div>

    </div>


    </div>
  )
}

export default Stats