import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Modal from './modal/Modal'

const CardList = ({ photo }) => {
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
      <div className="brick" onClick={handleClickOpen}>
        <img src={urls.small} alt={alt_description} />
      </div>

      <Modal handleModal={handleModal} open={open} photo={photo} />
    </>
  )
}
CardList.prototype = {
  photo: PropTypes.array.isRequired
}
export default CardList
