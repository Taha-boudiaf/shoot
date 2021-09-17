import React, { useState } from 'react'
import Card from '../photos/Card'
import Search from '../photos/Search'

const Home = () => {
  const [keyWord, setkeyWord] = useState('')
  const [page, setPage] = useState(1)
  const valuekeyWord = (text, page) => {
    setkeyWord(text, page)
  }
  const next = () => {
    let num = page
    if (num >= 1) {
      num += 1
      setPage(num)
    }
  }
  const last = () => {
    let num = page
    if ((num = 1)) {
      setPage = 1
    } else {
      num -= 1
      setPage(num)
    }
  }
  return (
    <>
      <Search valuekeyWord={valuekeyWord} page={page} />
      <Card keyWord={keyWord} page={page} />
    </>
  )
}

export default Home
