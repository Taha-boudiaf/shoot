import React, { useState } from 'react'
import Card from '../photos/Card'
import Search from '../photos/Search'

const Home = () => {
  const [keyWord, setKeyWord] = useState('')
  return (
    <>
      <Search keyWord={keyWord} />
      <Card />
    </>
  )
}

export default Home
