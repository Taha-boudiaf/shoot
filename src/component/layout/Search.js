import React, { useContext, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Paper, Button, makeStyles, TextField } from '@material-ui/core'

import ShootContext from '../../context/shoot/shootContext'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px',
    display: 'flex',
    justifyContent: 'center',
    height: '45px',
    background: 'rgb(255, 255, 255)',
    boxShadow:
      '0px 0px 8px 0px rgba(67, 86, 100, 0.1), 0px 0px 16px 0px rgba(67, 86, 100, 0.08)',
    borderRadius: '31px'
  },
  InputBaseElement: {
    flex: '1'
  },
  IconButtonElement: {
    padding: '10',
    borderRadius: '31px'
  }
}))

const Search = () => {
  const shootContext = useContext(ShootContext)
  const classes = useStyles()
  //   const [text, setText] = useState('')
  //   const handleOnChange = (e) => setText(e.target.value)
  //   console.log(text)
  return (
    <>
      <form component="form" className={classes.root}>
        <Button
          type="submit"
          aria-label="search"
          className={classes.IconButtonElement}
        >
          <SearchIcon />
        </Button>

        <input
          type="text"
          placeholder="Search..."
          //   onChange={handleOnChange}
          style={inputStyle}
        />
      </form>
    </>
  )
}
const inputStyle = {
  flex: '1',
  border: '0',
  borderRadius: '31px',
  outline: 'none'
}
export default Search
