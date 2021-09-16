import React, { useState } from 'react'
import { ImageListItem, makeStyles } from '@material-ui/core'
import Modal from './modal/Modal'
const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '5px',
    height: '100'
  }
})
const CardList = ({ photo: { alt_description, urls } }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <ImageListItem className={classes.list} onClick={handleClickOpen}>
        <img src={urls.thumb} alt={alt_description} className={classes.root} />
      </ImageListItem>
      <Modal />
    </>
  )
}

export default CardList
