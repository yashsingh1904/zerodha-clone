import React from 'react'

function RightSection({
    imageUrl, prdoductTitle, prdouctDescription, learnMore
}) {
    return (
        <div className='container p-5'>
            {/* Added align-items-center to keep both columns vertically middle-aligned */}
            <div className='row align-items-center'>

                {/* Text Column */}
                <div className='col-6 p-5'>
                    <h2 className='mb-3'>{prdoductTitle}</h2>
                    <p className='text-muted' style={{ lineHeight: "1.6" }}> 
                        {prdouctDescription} 
                    </p>
                    <a className='text-decoration-none' href={learnMore}>
                        Learn More <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>
                </div>

                {/* Image Column */}
                <div className='col-6 text-center'>
                    <img src={imageUrl} alt={prdoductTitle} style={{ width: "100%" }} />
                </div>

            </div>
        </div>
    )
}

export default RightSection