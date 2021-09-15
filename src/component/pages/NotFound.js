import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import notFound from '../../assets/notFound.png'
const NotFound = () => {
  return (
    <div style={notFoundStyle}>
      <div>
        <h1>Page Not Found</h1>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also
        </p>
      </div>
      <div>
        <img src={notFound} alt="page not found" style={Found} />
      </div>
      <div>
        <Link to="./" style={{ textDecorationLine: 'none' }}>
          <Button variant="contained" color="primary" style={btn}>
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  )
}
const notFoundStyle = {
  textAlign: 'center',
  marginTop: '50px'
}
const Found = {
  marginTop: '5rem'
}
const btn = {
  marginTop: '50px',
  padding: '15px 30px',
  color: 'black',
  fontSize: '18px',
  fontWeight: '500'
}
export default NotFound
