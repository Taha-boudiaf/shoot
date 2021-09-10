import React, { useReducer } from 'react'
import axios from 'axios'

import shootContext from './shootContext'
import ShootReducer from './shootReducer'
import { SEARCH_PHOTOS } from '../types'

const ShootState = ({ children }) => {
  // initial state
  const initialState = {
    photos: [],
    loading: true
  }

  const [state, dispatch] = useReducer(ShootReducer, initialState)

  const searchPhoto = async (text) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${text}&client_id=WkSlCfsYvCgph6jM9o6IneHxFp_wSzRICASHVT4-L-0`
    )
    console.log(text)
    dispatch({
      type: SEARCH_PHOTOS,
      payload: res.data.results
    })
  }

  console.log(state)
  return (
    <shootContext.Provider
      value={{
        photos: state.photos,
        loading: state.loading,
        searchPhoto
      }}
    >
      {children}
    </shootContext.Provider>
  )
}

export default ShootState
