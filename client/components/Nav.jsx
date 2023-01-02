import React from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Nav() {

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
    return (
      <>
      <IfAuthenticated>
        <Link to='/' className="hover:text-[#dab553] hover:font-bold" onClick={handleLogOff}>
            Log off
        </Link>
        
        <Link to='/profiles/add' className="hover:text-[#dab553] hover:font-bold">Add your profile</Link>
          {/* <p>{user?.nickname}</p>
          <p>{user?.name}</p> */}
        </IfAuthenticated>
        <IfNotAuthenticated>
          
            <Link
              to="/"
              className="hover:text-[#dab553] hover:font-bold"
              onClick={handleSignIn}
            >
              Sign In
            </Link>
          
        </IfNotAuthenticated>
        
            <Link
              to="/"
              className="hover:text-[#dab553] hover:font-bold">
              Home
            </Link>
           
      </>
  )
}

export default Nav
