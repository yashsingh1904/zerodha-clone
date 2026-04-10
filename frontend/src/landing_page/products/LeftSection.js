import React from 'react'

function LeftSection({
    imageUrl, prdoductTitle, prdouctDescription, tryDemo, learnMore, googlePlay, appStore
}) {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                
                {/* Image Side */}
                <div className='col-lg-6 col-md-12 text-center'>
                    <img src={imageUrl} alt={prdoductTitle} style={{ width: "90%" }} />
                </div>

                {/* Content Side */}
                <div className='col-lg-6 col-md-12 p-5'>
                    <h2 className='mb-3'>{prdoductTitle}</h2>
                    <p className='text-muted' style={{ lineHeight: "1.8" }}>
                        {prdouctDescription}
                    </p>

                    {/* Conditional Rendering for Links */}
                    <div className='d-flex gap-5 mt-4'>
                        {/* Only show Try Demo if the prop is passed */}
                        {tryDemo && (
                            <a className='text-decoration-none' href={tryDemo}>
                                Try { prdoductTitle} <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        )}

                        {/* Only show Learn More if the prop is passed */}
                        {learnMore && (
                            <a className='text-decoration-none' href={learnMore}>
                                Learn More <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        )}
                    </div>

                    {/* Conditional Rendering for App Badges */}
                    <div className='d-flex gap-3 mt-4'>
                        {googlePlay && (
                            <a href={googlePlay}>
                                <img src="/media/images/googlePlayBadge.svg" alt="Google Play" />
                            </a>
                        )}
                        {appStore && (
                            <a href={appStore}>
                                <img src="/media/images/appstoreBadge.svg" alt="App Store" />
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftSection