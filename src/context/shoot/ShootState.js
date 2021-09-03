import React, { useReducer } from 'react'
import axios from 'axios'

import shootContext from './shootContext'
import shootReducer from './shootReducer'
import { Search_PHOTO } from '../types'

const ShootState = (props) => {
  // initial state
  const initialState = {
    users: [],
    photo: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(shootReducer, initialState)

  const searchPhoto = async (text) => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos/?query=${text}&per_page=10&client_id=WkSlCfsYvCgph6jM9o6IneHxFp_wSzRICASHVT4-L-0`
    )
    console.log(res.data.results)
    dispatch({
      type: Search_PHOTO,
      payload: res.data.results
    })
  }

  return (
    <shootContext.Provider
      value={{
        photo: state.photo,
        searchPhoto
      }}
    >
      {props.children}
    </shootContext.Provider>
  )
}

export default ShootState
