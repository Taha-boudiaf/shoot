import React, { useReducer } from 'react'
import axios from 'axios'

import shootContext from './shootContext'
import shootReducer from './shootReducer'
import { Search_PHOTO } from '../types'

let shootClientID
let shootClientSecret

if (process.env.NODE_ENV !== 'production') {
  shootClientID = process.env.API_ACCESS_KEY
  shootClientSecret = process.env.API_SECRET_KEY
} else {
  shootClientID = process.env.ACCESS_KEY
  shootClientSecret = process.env.SECRET_KEY
}

const ShootState = (props) => {
  // initial state
  const initialState = {
    users: [],
    photo: [],
    user: {},
    loading: false
  }

  const [state, dispatch] = useReducer(shootReducer, initialState)

  const searchPhoto = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${shootClientID}`
    )
    console.log(res.data)
    dispatch({
      type: Search_PHOTO,
      payload: res.data
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
