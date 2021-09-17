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
    num += 1
    setPage(num)
  }

  const last = () => {
    let num = page
    if (num > 1) {
      num -= 1
      setPage(num)
    } else {
      num = 1
      setPage(1)
    }
  }
  return (
    <>
      <Search valuekeyWord={valuekeyWord} page={page} />
      <Card keyWord={keyWord} page={page} next={next} last={last} />
    </>
  )
}

export default Home
