import React, { useContext } from 'react'
import ShootState from '../../context/shoot/shootContext'
import CardList from './CardList'
import Loading from '../layout/Loading'
const Card = () => {
  const shootContext = useContext(ShootState)
  const loading = false
  const { photo } = shootContext
  if (loading) {
    return <Loading />
  } else {
    return (
      <div>
        {photo.map((pic) => (
          <CardList key={pic.id} photo={photo} />
        ))}
      </div>
    )
  }
}

export default Card
