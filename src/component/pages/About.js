import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Avatar from '../../assets/avatar.jpg'

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
        <h3>Taher Boudiaf</h3>
        <p>
          I am self-taught web developer who mainly uses React. I have a little
          experience, yet a big passion for learning everything new related to
          web development.
        </p>
        <h4>Skills:</h4>
        <div className="row">
          <span className="chip info">HTML</span>
          <span className="chip info">CSS</span>
          <span className="chip info">Javascript</span>
          <span className="chip info">JQuery</span>
          <span className="chip info">Bootstrap</span>
          <span className="chip info">React</span>
        </div>
      </Grid>
    </Grid>
  )
}

export default About
