import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import { updateGuide } from '../apis/guides'

// Use state to store form info and send it through to the api to go to the backend (send api id and body of form)

function ProfileUpdate({ showForm, showEditForm }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const initialObj = useRef({})

  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        initialObj.current = res
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const { name, bio, language, fee, contact_number, email } = initialObj.current

  const [guideDetails, setGuideDetails] = useState({
    name: name,
    bio: bio,
    language: language,
    fee: fee,
    contact_number: contact_number,
    email: email,
  })

  const handleChange = (evt) => {
    setGuideDetails({
      ...guideDetails,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    setGuideDetails(Number(guideDetails.contact_number))

    await updateGuide(id, guideDetails).then((res) => {
      console.log(res)

      navigate('/')
    })
  }

  return (
    <>
      {!showForm && (
        <button
          className="bg-[#C2DEDC] hover:bg-[#C0D1DD] text-[#2d3951] font-bold py-2 px-4 rounded"
          onClick={showEditForm}
        >
          {' '}
          Edit Profile
        </button>
      )}
      {showForm && (
        <button
          className="bg-[#C2DEDC] hover:bg-[#C0D1DD] text-[#2d3951] font-bold py-2 px-4 rounded"
          onClick={showEditForm}
        >
          {' '}
          Return
        </button>
      )}

      {showForm && (
        <div className=" max-w-full p-4 m-6 rounded shadow-md bg-[#E1EFEE]  dark:bg-gray-800 dark:border-gray-700 ">
          <h1 className="p-8 text-left font-medium">Edit profile</h1>
          <form onSubmit={handleSubmit} className="leading-3 text-left">
            <div className="p-1">
              <h1 className="p-2">Name : </h1>
              <input
                type="text"
                id="name"
                name="name"
                size="60"
                defaultValue={name}
                onChange={handleChange}
              />
            </div>
            <div className="p-1 ">
              <h1 className="p-2">Bio : </h1>
              <textarea
                className="leading-6"
                type="text"
                id="bio"
                name="bio"
                rows="7"
                cols="60"
                defaultValue={bio}
                onChange={handleChange}
              />
            </div>
            <div className="p-1">
              <h1 className="p-2">Language : </h1>
              <input
                type="text"
                id="language"
                name="language"
                size="60"
                defaultValue={language}
                onChange={handleChange}
              />
            </div>
            <div className="p-1">
              <h1 className="p-2">Fee : </h1>
              <input
                type="text"
                id="fee"
                name="fee"
                size="60"
                defaultValue={fee}
                onChange={handleChange}
              />
            </div>
            <div className="p-1">
              <h1 className="p-2">Contact Number : </h1>
              <input
                type="input"
                id="contact_number"
                name="contact_number"
                size="60"
                defaultValue={contact_number}
                onChange={handleChange}
              />
            </div>
            <div className="p-1">
              <h1 className="p-2">Email : </h1>
              <input
                type="text"
                id="email"
                name="email"
                size="60"
                defaultValue={email}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#E1EFEE] hover:bg-[#C3DDC0] text-[#2d3951] font-bold py-2 px-4 rounded text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default ProfileUpdate
