import React from 'react'
import apiConfig from '../../apiConfig'

export default function Card(props) {
  return (
    <div className='card'>
      <div className='poster'>
        <img src={`${apiConfig.w500Image(props.poster)}`} alt="" />
      </div>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
