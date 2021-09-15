import React, { useContext, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Button, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

import ShootContext from '../../context/shoot/shootContext'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '700px',
    margin: '30px',
    display: 'flex',
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

const Search = ({ valuekeyWord }) => {
  // context
  const shootContext = useContext(ShootContext)
  const { searchPhoto } = shootContext
  //   material ui style
  const classes = useStyles()
  const [text, setText] = useState('')
  // function to add data value in text
  const handleOnChange = (e) => setText(e.target.value)
  // function to submit value
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      console.log('no search value')
    } else {
      searchPhoto(text)
      valuekeyWord(text)
    }

    setText('')
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form component="form" className={classes.root} onSubmit={handleOnSubmit}>
        <Button
          type="submit"
          aria-label="search"
          className={classes.IconButtonElement}
        >
          <SearchIcon />
        </Button>
        <input
          type="text"
          value={text}
          placeholder="Search..."
          onChange={handleOnChange}
          style={inputStyle}
        />
      </form>
    </div>
  )
}
const inputStyle = {
  flex: '1',
  border: '0',
  borderRadius: '31px',
  outline: 'none'
}
Search.propTypes = {
  valuekeyWord: PropTypes.func.isRequired
}

export default Search
