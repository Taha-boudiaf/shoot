import { SEARCH_PHOTOS } from '../types'

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
    default:
      return state
  }
}
export default shootReducer
