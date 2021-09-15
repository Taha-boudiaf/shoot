import React, { useState } from 'react'
import Card from '../photos/Card'
import Search from '../photos/Search'

const Home = () => {
  const [keyWord, setkeyWord] = useState('')
  const valuekeyWord = (text) => {
    setkeyWord(text)
  }
  console.log(keyWord)
  return (
    <>
      <Search valuekeyWord={valuekeyWord} />
      <Card keyWord={keyWord} />
    </>
  )
}

export default Home
