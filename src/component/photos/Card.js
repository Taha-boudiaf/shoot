import React, { useContext } from 'react'
import ShootContext from '../../context/shoot/shootContext'
import CardList from './CardList'
import Loading from '../layout/Loading'
const Card = () => {
  const shootContext = useContext(ShootContext)
  const loading = false
  const { photos } = shootContext
  console.log(photos)
  if (loading) {
    return <Loading />
  } else {
    return (
      <div>
        {photos.map((photo) => (
          <CardList key={photo.id} photo={photo} />
        ))}
      </div>
    )
  }
}

export default Card
