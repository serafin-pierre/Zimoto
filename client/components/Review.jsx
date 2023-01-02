import ReviewEditDelete from './ReviewEditDelete'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReviewsThunk } from '../actions'
import StarRatingComponent from 'react-star-rating-component'

function Review({ guideId }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchReviewsThunk(guideId))
  }, [])

  const reviews = useSelector((globalState) => globalState.reviews)

  return (
    <>

      <div className="p-2 leading-8">
        <h1 className="font-semibold text-xl pt-8 text-left text-[#2d3951]">
          {' '}
          Reviews{' '}
        </h1>
        {reviews.length > 0 &&
          reviews.map((review) => {
            return (
              <div key={review.id}>
                <div className="flex pt-8">
                  <p>
                    <img
                      src="../images/squareLogo.png"
                      alt="zimotologo"
                      className="rounded-full h-12"
                    />
                  </p>
                  <p className="pt-2 pl-5 text-2xl">{review.rating}/5 </p>
                  
                </div>
                  <div className='flex justify-start pl-16'>
                  <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={review.rating}
                  />
                  </div>
                <p className="text-left text-xl font-bold p-5 leading-relaxed">
                  {review.title}
                </p>
                <p className="text-left leading-6">{review.text}</p>
                <ReviewEditDelete review={review} />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Review
