import React from 'react'
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Logo from '../icon/Logo'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <Logo />
          </Link>
          <Link to="about">About</Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
