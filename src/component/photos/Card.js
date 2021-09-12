import React, { useContext, useEffect } from 'react'
import { ImageList } from '@material-ui/core'

import ShootContext from '../../context/shoot/shootContext'
import CardList from './CardList'
import Loading from '../layout/Loading'

const Card = () => {
  const shootContext = useContext(ShootContext)
  const { photos, loading, searchPhoto } = shootContext

  useEffect(() => {
    searchPhoto()
  }, [])

  if (loading) {
    return <Loading />
  }
  if (photos.length < 1) {
    return <div> there are no photos</div>
  }
  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      <ImageList rowHeight={260} cols={4}>
        {photos.map((photo) => (
          <CardList key={photo.id} photo={photo} />
        ))}
      </ImageList>
    </div>
  )
}

export default Card
