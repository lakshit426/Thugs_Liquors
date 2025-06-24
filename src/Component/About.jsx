import React from 'react'
import Aboutp from '../Images/about2.avif'
import pic2 from '../Images/about3.avif'
import pic3 from '../Images/about4.avif'
// import Cardi from './MyCard'
import MyCard from './MyCard'

export default function About() {
    return (
        <>
            <div className="container-fluid p-0 m-0 bg-kala">
                <div className="row py-5"></div>
                <div className="row py-3"></div>
                <div className="row">
                    <div className="col-sm-5 display-1 text-light ">WELL BEHAVED
                        PEOPLE
                        JUST DRINK
                        ALCOHOL!!!!!
                    </div>
                    <div className="col-sm-7">
                        <img src={Aboutp} height='650px' width='100%' />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row py-3"></div>
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className='us'>ABOUT US</h1>
                        <p>Welcome to THUG'S — where top-shelf quality meets street-born soul. We craft bold, unapologetic spirits for those who move different and live loud. Every bottle tells a story of hustle, heritage, and high standards. This isn’t just a drink — it’s a statement. Respect the pour.We come from nights that never end and stories that start with a single shot. Inspired by underground culture and elevated by craft, THUG'S blends raw energy with refined taste. Whether you're raising a glass to the grind or the glory, we’re here for the bold moments. No filters, no frontin' — just real flavor and fire in every sip.We don’t follow trends — we set them. Every label, every blend, every drop is designed to stand out in a world that plays it safe. THUG'S is for the ones who toast to loyalty, legacy, and late nights. From the city lights to the underground scenes, we’re rooted in culture and raised on grit.
                           We partner with the finest distillers to ensure unmatched quality, but we never lose our raw edge. It’s luxury with an attitude — smooth where it counts, bold where it matters. When you sip THUG'S, you’re not just drinking — you’re owning the moment
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-kala">
            <div className="row py-3"></div>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={pic2} height='700px' width='100%' alt="" />
                    </div>
                    <div className="col-sm-6">
                        <img src={pic3}  height='700px' width='100%'alt="" />
                    </div>
                </div>
            </div>
            <MyCard/>
        </>
    )
}
