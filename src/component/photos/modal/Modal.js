import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

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
      <Typography variant="h6">{children}</Typography>
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

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

const Modal = ({ handleModal, open, photo }) => {
  const { urls, user } = photo
  console.log(photo)
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
        <img style={styleModel} src={urls.regular} />
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Photo by {user.first_name}
          {''}
          {user.last_name}
        </DialogTitle>
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
