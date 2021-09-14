import React from 'react'
import { ImageListItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '5px',
    height: '100'
  }
})
const CardList = ({
  photo: { user, alt_description, urls, description, likes, width }
}) => {
  const classes = useStyles()

  return (
    <ImageListItem className={classes.list}>
      <img src={urls.thumb} alt={alt_description} className={classes.root} />
    </ImageListItem>
  )
}

export default CardList
