import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import Footer from '../components/Home/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <div className="pt-16">
        <Hero />
        <Features />
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage

