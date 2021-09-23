import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const Modal = ({ handleModal, open, photo }) => {
  const { urls, user, description, likes, alt_description } = photo

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
