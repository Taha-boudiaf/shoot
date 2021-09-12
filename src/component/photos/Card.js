import React, { useContext, useEffect } from 'react'
import ShootContext from '../../context/shoot/shootContext'
import CardList from './CardList'
import Loading from '../layout/Loading'
import { Grid } from '@material-ui/core'
const Card = () => {
  const shootContext = useContext(ShootContext)
  const { photos, loading, searchPhoto } = shootContext

  useEffect(() => {
    searchPhoto()
  }, [])
  console.log(photos)
  if (loading) {
    return <Loading />
  }
  if (photos.length < 1) {
    return <div> there are no photos</div>
  }
  return (
    <Grid container spacing={2}>
      {photos.map((photo) => (
        <CardList key={photo.id} photo={photo} />
      ))}
    </Grid>
  )
}

export default Card
