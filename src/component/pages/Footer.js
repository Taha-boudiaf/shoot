import React from 'react'

const Footer = () => {
  return (
    <div style={footerStyle}>
      <h1>footer</h1>
    </div>
  )
}

const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '50px 0px 50px 0px',
  background: '#c3c3c3',
  marginTop: '20px'
}
export default Footer
