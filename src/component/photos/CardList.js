import React, { useState } from 'react'
import { ImageListItem, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Modal from './modal/Modal'

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '5px',
    height: '100'
  }
})
const CardList = ({ photo }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { alt_description, urls } = photo
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleModal = () => {
    setOpen(false)
  }
  return (
    <>
      <ImageListItem className={classes.list} onClick={handleClickOpen}>
        <img src={urls.thumb} alt={alt_description} className={classes.root} />
      </ImageListItem>
      <Modal handleModal={handleModal} open={open} photo={photo} />
    </>
  )
}
CardList.prototype = {
  photo: PropTypes.array.isRequired
}
export default CardList
