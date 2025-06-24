import React from 'react'
import Slider from './Slider'
import Category from './Category'
import Quotes from './Quotes'
import HowItWorks from './HowItWorks'
import Brands from './Brands'
import BarSchool from './BarSchool'
import WhatToBuy from './WhatToBuy'
import Pop from './Pop'
// import LoginPage from './LoginPage'
export default function Home() {
  return (
    <div className="back">
      {/* <LoginPage/> */}
      <Pop/>
      <Slider />
      <Category />
{/*       <Quotes /> */}
      <HowItWorks />
      <Brands />
      <BarSchool />
      <WhatToBuy />
    </div>
  )
}
