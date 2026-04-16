import React from 'react'

function RightSection({
  imageUrl, prdoductTitle, prdouctDescription, learnMore
}) {
  return (
    <div className='container my-4 my-md-5 px-3 px-md-4'>
      <div className='row align-items-center g-4'>

        {/* Text — appears first on mobile, left on desktop */}
        <div className='col-12 col-md-6 px-3 px-md-5 order-2 order-md-1'>
          <h2 className='mb-3 fs-3'>{prdoductTitle}</h2>
          <p className='text-muted' style={{ lineHeight: '1.6' }}>
            {prdouctDescription}
          </p>
          {learnMore && (
            <a className='text-decoration-none' href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          )}
        </div>

        {/* Image — appears second on mobile, right on desktop */}
        <div className='col-12 col-md-6 text-center order-1 order-md-2'>
          <img
            src={imageUrl}
            alt={prdoductTitle}
            className='img-fluid'
            style={{ maxWidth: '100%' }}
          />
        </div>

      </div>
    </div>
  )
}

export default RightSection