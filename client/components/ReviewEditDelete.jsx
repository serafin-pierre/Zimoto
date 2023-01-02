import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateReviewThunk, removeReviewThunk } from '../actions'
import { useParams } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated'

export default function ReviewEditDelete(review) {
  const dispatch = useDispatch()
  const userId = useParams()
  const { id, title, text, rating } = review.review
  const [showForm, setShowForm] = useState(false)

  function showEditForm() {
    setShowForm(!showForm)
  }

  function handleEdit () {
    const userEditTitle = document.getElementById("editTitle").value
    const userEditReview = document.getElementById("editReview").value
    const userEditRating = document.getElementById("editRating").value

    const editedReview = {
      title: userEditTitle,
      text: userEditReview,
      rating: +userEditRating,
      guide_id: userId.id,
    }
    dispatch(updateReviewThunk(id, editedReview))
  }

  function handleDelete() {
    dispatch(removeReviewThunk(id))
  }

  return (
    <>
      <IfAuthenticated>
        {showForm && (
          <div className="place-items-center max-w-sm p-8 m-6 text-left rounded shadow-md bg-[#E1EFEE]  dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleEdit}>
              <label className="form-label mb-2 text-black">
                Edit Review
                <h5 htmlFor="editTitle">Title:</h5>
                <textarea
                  id="editTitle"
                  rows="1"
                  cols="50"
                  name="Title"
                  defaultValue={title}
                  className=" form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </label>

              <label>
                <h5 htmlFor="editReview">Review:</h5>
                <textarea
                  id="editReview"
                  rows="6"
                  cols="75"
                  name="Review"
                  defaultValue={text}
                  className=" form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                />
              </label>

              <label>
                <h5> Rating: </h5>
                <div className="slidecontainer">
                  <input
                    id="editRating"
                    type="range"
                    min="1"
                    max="5"
                    defaultValue={rating}
                    className="slider"
                  />
                </div>
              </label>
              <div className="text-center">
                <input
                  type="submit"
                  className="bg-[#E1EFEE] hover:bg-[#C3DDC0] text-[#2d3951] font-bold py-2 px-4 rounded"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        )}
        <div className="flex flex-row justify-end">
          <button
            type="button"
            id="editButton"
            className="bg-[#C2DEDC] hover:bg-[#C0D1DD] text-[#2d3951] font-bold py-0 px-3 p-6 m-2 rounded"
            onClick={showEditForm}
          >
            EDIT
          </button>
          <form onSubmit={handleDelete}>
            <button
              type="submit"
              id="deleteButton"
              className="bg-[#C2DEDC] hover:bg-[#DAC0DD]  text-[#2d3951]  font-bold py-1 px-3 -6 m-2 rounded"
            >
              DELETE
            </button>
          </form>
        </div>
      </IfAuthenticated>
    </>
  )
}
