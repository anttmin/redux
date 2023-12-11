import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.css} box-shadow`}>{props.children}</div>
  )
}

export default Card