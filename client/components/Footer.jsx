import React from "react"
import { Link } from 'react-router-dom'
import AboutUs from "./AboutUs"

function Footer() {

  return (
    <>
    <div className="flex justify-center bg-gradient-to-r from-[#2D3951] to-[#576E9D] h-40">
      <Link className="mt-20 text-white hover:text-[#dab553] hover:font-bold" to='/about-us'>{AboutUs}About Us</Link>
    </div>
    </>

  )

}

export default Footer
