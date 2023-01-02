import { SET_GUIDES } from '../actions/guides'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_GUIDES:
      return payload
    default:
      return state
  }
}

export default reducer
