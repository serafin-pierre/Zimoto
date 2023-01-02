import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Header from './Header'
import GuideProfile from './GuideProfile'
import AddProfile from './AddProfile'
import Footer from './Footer'
import AboutUs from './AboutUs'

function App() {

  return (
    <>
      <div className="bg-[#C2DEDC] w-full h-full min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles/add" element={<AddProfile />} />
          <Route path="/profiles/:id" element={<GuideProfile />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
