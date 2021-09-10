import React, { useContext, useEffect } from 'react'
import ShootContext from '../../context/shoot/shootContext'
import CardList from './CardList'
import Loading from '../layout/Loading'
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
    <div>
      {photos.map((photo) => (
        <CardList key={photo.id} photo={photo} />
      ))}
    </div>
  )
}

export default Card
