import { SEARCH_PHOTOS, SET_PHOTOS_LOADING } from '../types'

const shootReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case SEARCH_PHOTOS: {
      return {
        ...state,
        photos: [...payload],
        loading: false
      }
    }
    case SET_PHOTOS_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    default:
      return state
  }
}
export default shootReducer
