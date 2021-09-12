import React from 'react'
import { GridListTile, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})
const CardList = (props) => {
  const classes = useStyles()
  const { user, alt_description, urls, description, likes, width } = props.photo

  return (
    <GridListTile>
      <img src={urls.small} alt={alt_description} className="gallery__image" />
      <div className="gallery__caption">
        <p> photo by {(user.first_name, user.last_name)}</p>
      </div>
    </GridListTile>
  )
}

export default CardList
