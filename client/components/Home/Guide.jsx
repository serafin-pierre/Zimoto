import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component'

function Guide({guide}) {
  
  // const [guideState, setGuide] = useState([])
  
  const {id, name, averageRating, fee, picture_url} = guide
  console.log(guide)
  return(
    <Link to= {'/profiles/'+ id }>
      <div className=' rounded shadow-md bg-[#d2e6e3] hover:shadow-lg shadow-gray-400 hover:shadow-gray-700 duration-150'>
        <div className=" w-full p-5">
          <img src={picture_url} alt="avatar" className=" rounded-full object-cover aspect-square"/>
        </div>
        <div className=" p-4 ">
          <h1 className=" text-xl"> {name} </h1>
          <h2> Rating: 
            {averageRating && <span> {Math.round(averageRating * 100)/100} </span>} </h2>
            <div>
              <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={averageRating && Math.round(averageRating * 100)/100}
                  />
            </div>
          <h2> Fee: ${fee}/hour </h2>
        </div>
      </div>
    </Link>
  )
}

export default Guide