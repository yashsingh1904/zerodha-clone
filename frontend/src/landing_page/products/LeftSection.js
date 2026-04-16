import React from 'react'

function LeftSection({
  imageUrl, prdoductTitle, prdouctDescription, tryDemo, learnMore, googlePlay, appStore
}) {
  return (
    <div className='container my-4 my-md-5 px-3 px-md-4'>
      <div className='row align-items-center g-4'>

        {/* Image — full width on mobile, half on desktop */}
        <div className='col-12 col-md-6 text-center'>
          <img
            src={imageUrl}
            alt={prdoductTitle}
            className='img-fluid'
            style={{ maxWidth: '90%' }}
          />
        </div>

        {/* Content — full width on mobile, half on desktop */}
        <div className='col-12 col-md-6 px-3 px-md-5'>
          <h2 className='mb-3 fs-3'>{prdoductTitle}</h2>
          <p className='text-muted' style={{ lineHeight: '1.8' }}>
            {prdouctDescription}
          </p>

          {/* Links — wrap on very small screens */}
          <div className='d-flex flex-wrap gap-3 gap-md-4 mt-4'>
            {tryDemo && (
              <a className='text-decoration-none' href={tryDemo}>
                Try {prdoductTitle} <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {learnMore && (
              <a className='text-decoration-none' href={learnMore}>
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>

          {/* App badges */}
          <div className='d-flex flex-wrap gap-3 mt-4'>
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="/media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ height: '40px', width: 'auto' }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img
                  src="/media/images/appstoreBadge.svg"
                  alt="App Store"
                  style={{ height: '40px', width: 'auto' }}
                />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeftSection