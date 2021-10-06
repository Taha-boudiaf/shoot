import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Avatar from '../../assets/avatar.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '15%'
  }
}))
const About = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6}>
        <img src={Avatar} alt="profile img" width="400" height="400" />
      </Grid>
      <Grid item xs={12} md={6}>
        <h3>SHOOT</h3>
        <p>
          An application for searching and viewing images built by React and
          using Unsplash api .<br />
          <span
            style={{ display: 'block', fontSize: '14px', fontWeight: '600' }}
          >
            Thank to Unsplash team for offering the API
          </span>
        </p>
        <h4>Skills:</h4>
        <div className="row">
          <span className="chip info">HTML</span>
          <span className="chip info">CSS</span>
          <span className="chip info">REACT</span>
          <span className="chip info">MATERIAL-UI</span>
          <span className="chip warning">UNSPLASH API</span>
        </div>
      </Grid>
    </Grid>
  )
}

export default About
