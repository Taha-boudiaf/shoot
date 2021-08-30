import React from 'react'
import load from '../../assets/loading.gif'
const Loading = () => {
  return (
    <div style={loadStyle}>
      <img src={load} alt="loading..." />
    </div>
  )
}

const loadStyle = {
  display: 'flex',
  justifyContent: 'center'
}
export default Loading
