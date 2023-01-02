import { fetchGuides, fetchFilteredGuides } from '../apis/guides'

export const SET_GUIDES = 'SET_GUIDES'

export function setGuides(guides) {
  return {
    type: SET_GUIDES,
    payload: guides,
  }
}

export function fetchGuidesThunk() {
  return (dispatch) => {
    return fetchGuides()
      .then(guides => {
      dispatch(setGuides(guides))
    })
  }
}

export function filterGuidesThunk(filters) {
  return (dispatch) => {
    return fetchFilteredGuides(filters)
      .then(guides => {
        dispatch(setGuides(guides))
      })
  }
}