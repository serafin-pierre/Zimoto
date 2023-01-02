import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteGuide } from '../apis/guides'

function ProfileDelete({ showForm }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  function removeProfile(id) {
    getAccessTokenSilently()
      .then((token) => {
        deleteGuide(id, token)
        navigate('/')
      })
      .catch((err) => err.message)
  }

  return (
    <>
      <div>
        {!showForm && (
          <button
            className="bg-[#C2DEDC] hover:bg-[#DAC0DD] text-[#2d3951] font-bold py-2 px-4 rounded"
            onClick={(e) => {
              console.log('delete profile')
              e.preventDefault()
              return removeProfile(id)
            }}
          >
            Delete Profile
          </button>
        )}
      </div>
    </>
  )
}

export default ProfileDelete
