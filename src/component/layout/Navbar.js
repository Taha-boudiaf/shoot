import React, { cloneElement } from 'react'
import { makeStyles, AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import PropTypes from 'prop-types'

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

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}
const Navbar = (props) => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <Link to="/">
              <Logo />
            </Link>
            <Link to="about">About</Link>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
    </>
  )
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}
export default Navbar
