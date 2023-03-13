import React from 'react'

function Card({src,title,info}) {
  return (
    <div className='wrapper'>
        <img src={src} alt="bananman" />
        <h1>{title}</h1>
        <h4>{info}</h4>
    </div>
  )
}

export default Card