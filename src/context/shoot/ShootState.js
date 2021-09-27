import React, { useReducer } from 'react'
import axios from 'axios'

import shootContext from './shootContext'
import ShootReducer from './shootReducer'
import { SEARCH_PHOTOS, SET_PHOTOS_LOADING } from '../types'

let secretCode

if (process.env.NODE_ENV !== 'production') {
  secretCode = process.env.REACT_APP_CLIENT_SECRET
} else {
  secretCode = process.env.CLIENT_SECRET
}

const ShootState = ({ children }) => {
  // initial state
  const initialState = {
    photos: [],
    loading: true
  }

  const [state, dispatch] = useReducer(ShootReducer, initialState)

  // search photos
  const searchPhoto = async (text, page) => {
    dispatch({
      type: SET_PHOTOS_LOADING
    })
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${text}&per_page=30&page=${page}&client_id=${secretCode}`
    )
    dispatch({
      type: SEARCH_PHOTOS,
      payload: res.data.results
    })
  }
  // global photos
  const globalPhotos = async (page) => {
    dispatch({
      type: SET_PHOTOS_LOADING
    })
    const res = await axios.get(
      `https://api.unsplash.com/photos/?per_page=30&page=${page}&client_id=WkSlCfsYvCgph6jM9o6IneHxFp_wSzRICASHVT4-L-0`
    )
    dispatch({
      type: SEARCH_PHOTOS,
      payload: res.data
    })
  }
  return (
    <shootContext.Provider
      value={{
        photos: state.photos,
        loading: state.loading,
        searchPhoto,
        globalPhotos
      }}
    >
      {children}
    </shootContext.Provider>
  )
}

export default ShootState
