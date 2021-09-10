import React from 'react'
import notFound from '../../assets/error.jpg'
const NotFound = () => {
  return (
    <div>
      <img src={notFound} alt="NotFound" style={notFoundStyle} />
    </div>
  )
}
const notFoundStyle = {
  width: '100%'
}

export default NotFound
