import React from 'react'
// import notFound from '../../assets/notFound.jpg'
const NotFound = () => {
  return (
    <div style={NotF}>
      {/* <img src={notFound} alt="NotFound" style={notFoundStyle} /> */}
      <h1>404 Page Not Found</h1>
    </div>
  )
}
// const notFoundStyle = {
//   width: '100%'
// }
const NotF = {
  display: 'flex',
  justifyContent: 'center'
}
export default NotFound
