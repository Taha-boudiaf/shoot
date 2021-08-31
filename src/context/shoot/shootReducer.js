import { Search_PHOTO } from '../types'

const shootReducer = (state, action) => {
  switch (action) {
    case Search_PHOTO:
      return {
        ...state,
        photo: action.payload,
        loading: false
      }

    default:
      return state
  }
}
export default shootReducer
