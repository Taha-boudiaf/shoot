import React from 'react'
import { GridListTile, ImageListItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '5px'
  }
})
const CardList = (props) => {
  const classes = useStyles()
  const { user, alt_description, urls, description, likes, width } = props.photo
  return (
    <ImageListItem>
      <img src={urls.small} alt={alt_description} className={classes.root} />
    </ImageListItem>
  )
}

export default CardList
