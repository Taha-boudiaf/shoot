import React, { useContext, useEffect } from 'react'
import ShootContext from '../../context/shoot/shootContext'
import CardList from './CardList'
import Loading from '../layout/Loading'
import { GridList } from '@material-ui/core'

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
    <div style={{ scrollBehavior: 'smooth' }}>
      <GridList cellHeight={260} cols={4}>
        {photos.map((photo) => (
          <CardList key={photo.id} photo={photo} />
        ))}
      </GridList>
    </div>
  )
}

export default Card
