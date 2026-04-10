import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection imageUrl="media\images\kite.png" prdoductTitle="Kite" prdouctDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="/kite"
                learnMore="/learnmore"
                googlePlay=".."
                appStore=".."
            />

            <RightSection imageUrl="media\images\console.png" prdoductTitle="Console" prdouctDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." />

            <LeftSection imageUrl="media\images\coin.png" prdoductTitle="Coin" prdouctDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="/coin"
                learnMore=""
                googlePlay=".."
                appStore=".."
            />
               <RightSection imageUrl="media\images\kiteconnect.png" prdoductTitle=" Kite Connect API" prdouctDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." />

            <LeftSection imageUrl="media\images\varsity.png" prdoductTitle="Varsity" prdouctDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo=""
                learnMore=""
                googlePlay=".."
                appStore=".."
            />

            <Universe />
        </>


    )
}

export default ProductPage