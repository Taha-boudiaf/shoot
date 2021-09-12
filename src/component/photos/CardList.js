import React from 'react'
import {
  Grid,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})
const CardList = (props) => {
  const classes = useStyles()
  const { user,alt_descriptionm, urls, description, likes } = props.photo

  return (
    <Grid md={4} >
    <div className='gallery' >
      <div className="gallery__column">
        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src={urls.regular} alt="Portrait by Jessica Felicio" className="gallery__image"/>
            <figcaption className="gallery__caption">photo by {user.first_name,user.last_name}</figcaption>
          </figure>
		    </a>
      </div>
    </div>
    </Grid>
  )
}

export default CardList
