import { SET_REVIEWS, ADD_REVIEWS, EDIT_REVIEWS, REMOVE_REVIEWS  } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_REVIEWS:
      return payload
    case ADD_REVIEWS:
      return payload
    case EDIT_REVIEWS:
      return payload
    case REMOVE_REVIEWS:
      return payload
    default:
      return state
  }
}

export default reducer
