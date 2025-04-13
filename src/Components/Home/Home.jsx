import React from 'react'
import ScrollingText from './ScrollingText'
import Navbar from './Navbar'
import BannerChanger from './BannerChanger'
import SubscriptionProduct from './SubscriptionProduct'
import OrganicVeg from './OrganicVeg'

const Home = () => {
  return (
    <>
      <ScrollingText/>
      <Navbar/>
      <BannerChanger/>
      <SubscriptionProduct/>
      <OrganicVeg/>
    </>
  )
}

export default Home
