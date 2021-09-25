import React from 'react'

import Dialog from '@material-ui/core/Dialog'

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'

import PropTypes from 'prop-types'

const Modal = ({ handleModal, open, photo }) => {
  const { urls, user, likes, alt_description } = photo

  const handleClose = () => {
    handleModal(false)
  }
  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <img
          style={styleModel}
          src={urls.regular}
          onClick={handleClose}
          alt={alt_description}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: '10px'
          }}
        >
          <h5 style={{ marginLeft: '10px' }}>
            Photo by {user.first_name}
            {user.last_name}
          </h5>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',
                fontWeight: '600'
              }}
            >
              {likes}
            </span>
            <ThumbUpAltOutlinedIcon />{' '}
          </div>
        </div>
      </Dialog>
    </>
  )
}
const styleModel = {
  width: '100%',
  objectFit: 'cover',
  overflow: 'auto'
}
Modal.prototype = {
  handleModal: PropTypes.func.isRequired,
  photo: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired
}
export default Modal
