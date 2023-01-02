import React from 'react'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import Nav from './Nav'

function Header() {
  return (
    <>
        <BurgerMenu />
      <div className=" flex justify-center bg-gradient-to-r from-[#2D3951] to-[#576E9D] place-content-center  ">
        <Logo />
      </div>
      {/* <div>
        <Nav />
      </div> */}
    </>
  )
}

export default Header
