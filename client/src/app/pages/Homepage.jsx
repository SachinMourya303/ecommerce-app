import React from 'react'
import HeroSection from '../sections/HeroSection'
import Layout from '../sections/Layout'
import CategorySection from '../sections/CategorySection'
import Footer from '../sections/Footer'

const Homepage = () => {
  return (
    <div>
        <HeroSection />
        <CategorySection />
        <Layout />
        <Footer />
    </div>
  )
}

export default Homepage