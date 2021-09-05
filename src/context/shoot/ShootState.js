import React, { useReducer } from 'react'
import axios from 'axios'

import shootContext from './shootContext'
import ShootReducer from './shootReducer'
import { SEARCH_PHOTO } from '../types'

const ShootState = (props) => {
  // initial state
  const initialState = {
    users: [],
    photos: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(ShootReducer, initialState)

  const searchPhoto = async (text) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${text}&client_id=WkSlCfsYvCgph6jM9o6IneHxFp_wSzRICASHVT4-L-0`
    )
    dispatch({
      type: SEARCH_PHOTO,
      payload: res.data.results
    })
  }

  return (
    <shootContext.Provider
      value={{
        photos: state.photos,
        searchPhoto
      }}
    >
      {props.children}
    </shootContext.Provider>
  )
}

export default ShootState
