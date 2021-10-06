import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Avatar from '../../assets/avatar.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '5%'
  }
}))
const About = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      <Grid item sm={6} xs="auto" md={6} style={{ marginTop: '5%' }}>
        <img src={Avatar} alt="profile img" width="400" height="400" />
      </Grid>
      <Grid item sm={6} xs="auto" md={6} style={{ marginTop: '3%' }}>
        <h3>SHOOT</h3>
        <p>
          An application for searching and viewing images built by React and
          using Unsplash api .
          <h5>Thank to Unsplash team for offering the API</h5>
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
