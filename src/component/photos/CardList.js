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
  const { alt_descriptionm, urls, description, likes } = props.photo

  return (
    
    <div className='gallery' >
      <Grid md={3} item={true} >
        <a href="https://unsplash.com/@jeka_fe" target="_blank" className="gallery__link">
          <figure className="gallery__thumb">
            <img src={urls.regular} alt="Portrait by Jessica Felicio" className="gallery__image"/>
            <figcaption className="gallery__caption">{description}</figcaption>
          </figure>
		    </a>
        </Grid>
    </div>
  
  )
}

export default CardList
