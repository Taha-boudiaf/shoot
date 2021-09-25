import React, { useContext, useEffect } from 'react'
import { Button, ImageList, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined'

import ShootContext from '../../context/shoot/shootContext'
import CardList from './CardList'
import Loading from '../layout/Loading'

const useStyles = makeStyles({
  list: {
    display: 'flex',
    justifyContent: 'center'
  },
  btn: {
    background: '#eceff1',
    padding: '10px 15px'
  }
})

const Card = ({ keyWord, page, next, last }) => {
  const classes = useStyles()
  // use context api
  const shootContext = useContext(ShootContext)
  const { photos, loading, searchPhoto, globalPhotos } = shootContext
  // random photos & search for photos
  useEffect(() => {
    if (keyWord !== '') {
      searchPhoto(page)
    } else {
      globalPhotos(page)
    }
  }, [page])
  // loading after show phaotos
  if (loading) {
    return <Loading />
  }
  // when lenght of photos is 0
  if (photos.length < 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1> There Are No Photos</h1>
      </div>
    )
  }
  // map photos
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <ImageList rowHeight={260} cols={3} className={classes.list}>
        {photos.map((photo) => (
          <CardList key={photo.id} photo={photo} />
        ))}
      </ImageList>
      <div className="btn">
        <Button onClick={last} variant="contained" className={classes.btn}>
          <ArrowBackIosOutlinedIcon style={{ opacity: 0.8 }} />
        </Button>
        <Button onClick={next} variant="contained" className={classes.btn}>
          <ArrowForwardIosOutlinedIcon style={{ opacity: 0.8 }} />
        </Button>
      </div>
    </div>
  )
}

Card.prototype = {
  keyWord: PropTypes.string.isRequired
}

export default Card
