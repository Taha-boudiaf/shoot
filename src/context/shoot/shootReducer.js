import { SEARCH_PHOTO } from '../types'

const shootReducer = (state, action) => {
  switch (action) {
    case SEARCH_PHOTO:
      return {
        ...state,
        photos: action.payload,
        loading: false
      }

    default:
      return state
  }
}
export default shootReducer
