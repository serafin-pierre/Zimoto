import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { updateGuide } from '../apis/guides'
import { fetchAGuide } from '../apis/individualGuide'
import { IfAuthenticated } from './Authenticated'

const UploadWidget = () => {
  const { id } = useParams()
  const guideObj = useRef()
  const cloudinary = useRef()
  const widget = useRef()
  const imgPath = useRef(null)
  const imgUrl = 'https://res.cloudinary.com/dhstdr0nk/image/upload/'
  useEffect(() => {
    fetchAGuide(id)
      .then((res) => {
        guideObj.current = res
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  useEffect(() => {
    cloudinary.current = window.cloudinary
    widget.current = cloudinary.current.createUploadWidget(
      {
        cloudName: 'dhstdr0nk',
        uploadPreset: 'zimoto',
      },
      async function (error, result) {
        if (result.data.event === 'abort') {
          window.location.reload(false)
        }
        try {
          imgPath.current = result.data.info.files[0].uploadInfo.path
        } catch (err) {
          console.log({error: err.message})
        }
        // if (result.data.info.files[0].uploadInfo.path !== undefined) {
        //   imgPath.current = result.data.info.files[0].uploadInfo.path
        // }
        if (imgPath.current !== null) {
          const uploadedImage = imgUrl + imgPath.current

          const imgUrlUpdate = {
            picture_url: uploadedImage,
          }
          updateGuide(id, imgUrlUpdate)
        }
      }
    )
  }, [])

  return (
    <>
      <IfAuthenticated>
        <button
          className="bg-[#C2DEDC] hover:bg-[#C0D1DD] text-[#2d3951] font-bold py-2 px-4 rounded m-5 "
          onClick={() => widget.current.open()}
        >
          Update Image
        </button>
      </IfAuthenticated>
    </>
  )
}

export default UploadWidget
