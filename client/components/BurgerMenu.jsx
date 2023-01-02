import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import Nav from './Nav'

function BurgerMenu() {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: 'gray'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  
  const { logout, loginWithRedirect} = useAuth0()

  const { user } = useAuth0()

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }
  
  const showSettings = (event) => {
    event.preventDefault();
  }

  return(
    <Menu styles={ styles } >

      <p >{user?.nickname}</p>

      <IfAuthenticated>
        <br></br>
          <Link to='/' className="hover:text-[#dab553] hover:font-bold" onClick={handleLogOff}>
              Log off
          </Link> 
        <br></br>
      </IfAuthenticated>
      
      <IfAuthenticated>

        <Link to='/profiles/add' className="hover:text-[#dab553] hover:font-bold">Add your profile</Link> <br></br>

      </IfAuthenticated>
        <IfNotAuthenticated>
          
            <Link
              to="/"
              className="hover:text-[#dab553] hover:font-bold"
              onClick={handleSignIn}
            >
              Sign In
            </Link> <br></br>
          
        </IfNotAuthenticated>
        
            <Link
              to="/"
              className="hover:text-[#dab553] hover:font-bold">
              Home
            </Link>
    </Menu>
  )
}

export default BurgerMenu