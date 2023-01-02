import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAGuide } from '../apis/individualGuide'
import '../index.css'
import ProfileDelete from './ProfileDelete'
import ProfileUpdate from './ProfileUpdate'
import NewReview from './NewReview'
import Review from './Review'
import ImageUpload from './ImageUpload'
import { IfAuthenticated } from './Authenticated'

function GuideProfile() {
  const [showForm, setShowForm] = useState(false)

  function showEditForm() {
    setShowForm(!showForm)
  }

  const [guide, setGuide] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        setGuide(res)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      <div className="mx-auto text-center flex flex-col lg:w-2/3 p-10 lg:p-10 mb-15 ">
        <div className="font-[Lora] bg-[#C2DEDC] text-xl ">
          <div className="block pt-10 break-nomal md:break-all ">
            <div className=" flex justify-center flex-col lg:flex-row space-x-10">
              <img
                className="object-cover aspect-square h-60 md:h-60 lg:h-60 rounded-full bg-white"
                src={guide?.picture_url}
                alt="img"
              />
              <div className="text-left leading-10 break-nomal md:break-all mx-auto lg:p-10 mb-15 ">
                <p className="font-normal">Hello! I&apos;m </p>
                <p className="font-semibold text-center">{guide?.name}</p>
                <p className="font-normal">I would like to be your guide to</p>
                <p className="font-semibold text-center">
                  {guide?.city}
                  <span className="font-normal">,</span>
                  &nbsp;
                  {'  '}
                  {guide?.country}
                </p>
              </div>
            </div>
          </div>
          <div className="flex lg:justify-start lg:pl-56 self-center pl-16">
            <ImageUpload />
          </div>

          <div className="p-8 m-6 text-left rounded shadow-md bg-[#d2e6e3] leading-8">
            <div className="m-2">
              <h2 className="font-semibold text-xl">About {guide?.name}</h2>
              <p className="leading-8">{guide?.bio}</p>
            </div>
            <div className="m-2 pt-6">
              <h2 className="font-semibold text-xl">
                More about your local guide
              </h2>
              <ul className="list-disc list-style-position: inside ">
                <li>Languages : {guide?.language}</li>
                <li>Fee : ${guide?.fee} per hour </li>
                <li>Contact Number : {guide?.contactNumber}</li>
                <li>Email : {guide?.email}</li>
              </ul>
            </div>
            <IfAuthenticated>
              <div className="border-t border-[#c2dedc] p-2 flex justify-center">
                <ProfileUpdate
                  showForm={showForm}
                  showEditForm={showEditForm}
                />
                <div className="p-2"></div>
                <ProfileDelete showForm={showForm} />
              </div>
            </IfAuthenticated>
          </div>
          <div className="border-t border-[#dab553] m-6">
            <Review guideId={id} />
          </div>
          <div className="border-t border-[#dab553] p-6">
            <NewReview />
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideProfile
