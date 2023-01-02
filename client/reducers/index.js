import { combineReducers } from 'redux'

import guides from './guides'
import reviews from './reviews'

export default combineReducers({
  guides,
  reviews,
})
